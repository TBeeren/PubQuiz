import { openSocket } from '../websocket';

const applicationHost = "http://localhost:3010";

export function CreateQuizAction(quizInfo) {
    return {
        type: "CREATE_QUIZ",
        payload: {
            quizName: quizInfo.name,
            roomId: quizInfo.roomId
        }
    }
}

export function FetchTeamsAction(teamNames){
    return {
        type: "FETCH_TEAMS",
        payload: teamNames
    }
}

export function RemoveTeamAction(teamNames){
    return {
        type: "REMOVE_TEAM",
        payload: teamNames
    }
}

export function StartQuizAction(quizInfo){
    return{
        type: "START_QUIZ",
        payload: {
            isStarted: quizInfo.isStarted,
            roomId: quizInfo.roomId
        }
    }
}

const shuffleArray = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  

export function NewCategoryAction(categories)
{
    return {
        type: "NEW_CATEGORIES",
        payload: {
            categories: shuffleArray(categories),
        }
    }
}

export function fetchTeam(roomId){
    return async function(dispatch)
    {
        try
        {
            let response = await fetch(`${applicationHost}/api/v1/games/${roomId}/teams`);
            response = await response.json();
            let teamsArray = response[0].teams;
            let resArray = [];  
            for(var i = 0; i < teamsArray.length; i++){
                resArray.push(teamsArray[i].name)
            }
            dispatch(FetchTeamsAction(resArray));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}

export function removeTeam(roomId, teamName){
    return async function(dispatch){
        try {
            let body = {
                teamName: teamName
            }
            let response = await fetch(`${applicationHost}/api/v1/games/${roomId}/teams/${teamName}`, {
                method: "Delete",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            response = await response.json();
            dispatch(RemoveTeamAction(response));
        } catch (e) {
            console.log(e.message);
        }
    }
}

export function createQuiz(store, history, name, language)
{
    return async function(dispatch)
    {
        try
        {
            let body = {
                name: name,
                language: language
            }
            let response = await fetch(`${applicationHost}/api/v1/games`, {
                method: "Post",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            response = await response.json();
            openSocket(store, history);
            dispatch(CreateQuizAction(response));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}

export function startQuiz(roomId, isStarted)
{
    return async function(dispatch)
    {
        try
        {
            let body = {
                isStarted: isStarted,
                roomId: roomId
            }
            let response = await fetch(`${applicationHost}/api/v1/games/${roomId}`, {
                method: "Put",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            response = await response.json();
            dispatch(StartQuizAction(response));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}

export function fetchCategories(roomId)
{
    return async function(dispatch)
    {
        try
        {
            let response = await fetch(`${applicationHost}/api/v1/games/${roomId}/categories`);
            response = await response.json();
            dispatch(NewCategoryAction(response));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}