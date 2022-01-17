import { useDispatch } from "react-redux";
import { FACE, TALENT } from "./type";

// const dispatch = useDispatch;
export const detailFaceAction = (id) => {
  return {
    type: FACE,
    payload: id,
  };
};
export const detailTalentAction = (id) => {
  return {
    type: TALENT,
    payload: id,
  };
};

const getAllDataCandidate = async () => {
    const URL = `https://615ab6234a360f0017a81212.mockapi.io/api/demo/DataCandidate/`;
    const response  = await fetch(URL, { method: "GET" })
    const data = await response.json();
    return data
};

const createDataCandidate = (data) => {
    const URL =
        `https://615ab6234a360f0017a81212.mockapi.io/api/demo/DataCandidate`;
    return fetch(URL, { method: "POST", body: data }).then((response) =>
        Promise.all([response, response.json()])
    );
};

const getDataCandidateById = async (id) => {
    const URL = `https://615ab6234a360f0017a81212.mockapi.io/api/demo/DataCandidate/${id}`;
    const response  = await fetch(URL, { method: "GET" })
    const data = await response.json();
    return data
};


const updateDataCandidateById = async (id, dataUpdateById) => {
    const URL = `https://615ab6234a360f0017a81212.mockapi.io/api/demo/DataCandidate/${id}`;
    // console.log(dataUpdateById)
    const response  = await fetch(URL, { method: "PUT", body: JSON.stringify(dataUpdateById) })
    const data = await response.json();
    return data
};

const deleteDataCandidateById = (id) => {
    const URL =
        `https://615ab6234a360f0017a81212.mockapi.io/api/demo/DataCandidate/${id}`;
    return fetch(URL, { method: "DELETE" }).then((response) =>
        Promise.all([response, response.json()])
    );
};



export const getCandidateByIdRequest = () => {
  return {
    type: "GET_DATA_CANDIDATE_BY_ID_REQUEST",
  };
};

export const getCandidateByIdSuccess = (dataById) => {
  return {
    type: "GET_DATA_CANDIDATE_BY_ID_SUCCESS",
    payload: dataById,
  };
};

export const getCandidateByIdError = () => {
  return {
    type: "GET_DATA_CANDIDATE_BY_ID_ERROR",
  };
};
export const getAllCandidateRequest = () => {
  return {
    type: "GET_ALL_DATA_CANDIDATE_REQUEST",
  };
};

export const getAllCandidateSuccess = (data) => {
  return {
    type: "GET_ALL_DATA_CANDIDATE_SUCCESS",
    payload: data,
  };
};

export const getAllCandidateError = () => {
  return {
    type:"GET_ALL_DATA_CANDIDATE_ERROR",
  };
};

export const updateCandidateByIdRequest = () => {
    return{
        type : "UPDATE_DATA_CANDIDATE_BY_ID_REQUEST",
    }
}
export const updateCandidateByIdSuccess = (dataUpdateById) => {
    return{
        type : "UPDATE_DATA_CANDIDATE_BY_ID_SUCCESS",
        payload: dataUpdateById,
    }
}
export const updateCandidateByIdError = () => {
    return{
        type : "UPDATE_DATA_CANDIDATE_BY_ID_ERROR",
    }
}

export const getDataCandidate = async (id, dispatch) => {
    dispatch(getCandidateByIdRequest())

    const result = await getDataCandidateById(id)

    if (!!result) {
        dispatch(getCandidateByIdSuccess(result));
    } else {
        dispatch(getCandidateByIdError());
    }
};

export const getAllCandidate = async ( dispatch) => {
    dispatch(getAllCandidateRequest())

    const result = await getAllDataCandidate()

    if (!!result) {
        dispatch(getAllCandidateSuccess(result));
    } else {
        dispatch(getAllCandidateError());
    }
};

export const updateDataCandidate = async (id, dataFixed,dispatch)=>{
    dispatch(updateCandidateByIdRequest())

    const resultUpdate = await updateDataCandidateById(id, dataFixed, dispatch)

    if(!!resultUpdate){
        dispatch(updateCandidateByIdSuccess(resultUpdate));
    } else {
        dispatch(updateCandidateByIdError());
    }
}