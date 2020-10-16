const applicationHost = "http://localhost:3001";

export function NextQuestionAction(number) {
  return {
    type: "NEXT_QUESTION",
    payload: {
      questionNumber: number,
    },
  };
}

export function NewQuestionAction(questions) {
  return {
    type: "NEW_QUESTION",
    payload: {
      questions: questions,
    },
  };
}

export function fetchNewQuestion(roomId, questionId) {
  return async function (dispatch) {
    try {
      let response = await fetch(
        `${applicationHost}/api/v1/games/${roomId}/questions/${questionId}`
      );
      response = await response.json();
      dispatch(NewQuestionAction(response.question, response.questionNumber));
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
