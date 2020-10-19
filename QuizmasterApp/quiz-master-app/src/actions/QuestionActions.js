const applicationHost = "http://localhost:3001";

export function NextQuestionAction(question) {
  return {
    type: "NEXT_QUESTION",
    payload: {
      questions: question,
    },
  };
}

export function NewQuestionAction(questions) {
  return {
    type: "NEW_QUESTION",
    payload: {
      questions: questions
    },
  };
}

export function addQuestionAction(question) {
  return {
    type: "ADD_QUESTION",
    payload: {
      question: question.question,
      questionNumber: question.questionNumber
    }
  }
}

export function addNextQuestion(roomId, question) {
  return async function (dispatch) {
    try {
      let body = {
        question: question,
      };
      let response = await fetch(
        `${applicationHost}/api/v1/games/${roomId}/questions`,
        {
          method: "Post",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      response = await response.json();
      console.log("Response: ", response);
      dispatch(addQuestionAction(question));
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchNextQuestion(roomId, questionId) {
  return async function (dispatch) {
    try {
      let response = await fetch(
        `${applicationHost}/api/v1/games/${roomId}/questions/${questionId}`
      );
      response = await response.json();
      dispatch(NextQuestionAction(response.question, response.questionNumber));
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchQuestions(roomId, round) {
  return async function (dispatch) {
    try {
      let response = await fetch(
        `${applicationHost}/api/v1/games/${roomId}/${round}/questions`
      );
      response = await response.json();
      const mappedRes = response.map((item) => {
        return {
          question: item.questionText,
          questionNumber: item._id,
        };
      });
      dispatch(NewQuestionAction(mappedRes));
    } catch (error) {
      console.log(error);
    }
  };
}
