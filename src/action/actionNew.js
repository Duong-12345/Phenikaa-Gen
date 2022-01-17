import { useDispatch } from "react-redux"
import { DETAIL } from "./type"

const dispatch = useDispatch;

export const getDetailNew = (id) => {
    dispatch({
        type: "GET_DETAL_NEW_FETCHING",
    })
    const { res, err } = fetch(`/phenika-uni/${id}`)
    if (res.status === true && !err) {
        dispatch({
            type: 'GET_DETAL_NEW_SUCCESS',
            payload: res.data,
        })
    } else {
        dispatch({
            type: 'GET_DETAIL_NEW_FAILURE',
        })
    }
}

export const detailNewAction = (id) => {
    return {
        type: DETAIL,
        payload: id,
    }
}
