import axios from "axios";
import * as types from "./admin.types";

export const GetRequest = () => async (dispatch) => {

  dispatch({ type: types.LOADING });
  try {
    const res = await axios.get(`https://black-skirt.cyclic.app/products/`);

    dispatch({ type: types.GETPRODUCTS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.ERROR });
  }
};

export const GetUserDataRequest = () => async (dispatch) => {
  dispatch({ type: types.LOADING });
  try {
    const res = await axios.get(`https://black-skirt.cyclic.app/users/`);
    dispatch({ type: types.GETUSERDATA, payload: res.data });
  } catch (error) {
    dispatch({ type: types.ERROR });
  }
};


export const PostUserDataRequest = (details) => async (dispatch) => {
  const res = await axios.post(
    `https://black-skirt.cyclic.app/users/`,
    details
  );
  if (res.data) {
    dispatch({ type: types.POSTUSERDATA, payload: res.data });
  }
};

export const GetOrdersDataRequest = () => async (dispatch) => {
    dispatch({ type: types.LOADING })
    try {
        const res = await axios.get(`https://63f5d74059c944921f678f16.mockapi.io/orders`)
        dispatch({ type: types.GETORDERSDATA, payload: res.data })
    } catch (error) {
        dispatch({ type: types.ERROR })
    }
}

// export const PostOrdersDataRequest = (details) => async (dispatch) => {
//     const res = await axios.post(`https://black-skirt.cyclic.app/orders`, details)
//     if (res.data) {
//         dispatch({ type: types.POSTORDERSDATA, payload: res.data })
//     }
// }

export const FilterProd = (value) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://black-skirt.cyclic.app/products?category=${value}`
    );

    // let x = res.data.filter((item) => {
    //   return item.use.includes(value);

    const data = await res.json();
    console.log(data, "filter");
    if (data) {
      dispatch({ type: types.FILTERPRODUCTS, payload: data });
    }
  } catch (error) {
    dispatch({ type: types.ERROR });
  }
};

export const DeleteProd = (id) => async (dispatch) => {
  //   const res = await axios.get(`https://black-skirt.cyclic.app/products/${id}`);
  //   const deleteRes = await axios.delete(
  //     `https://black-skirt.cyclic.app/products/delete/${id}`
  //   );

  const res = await axios.get(`https://black-skirt.cyclic.app/products/${id}`);
  const deleteres = await fetch(
    `https://black-skirt.cyclic.app/products/delete/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        auth: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI3MDRjNjlkMDM0YTg4ZTlkZjkyY2MiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODAzNDc3MzF9.ZlUL8Yby_MkpBA8KOzZZ0otnF811Wihexy43zycgqIc",
      },
    }
  );
  const data = await deleteres.json();

  if (data) {
    dispatch({ type: types.DELETEPRODUCT, payload: data });
  }
};

export const UpdateProd = (id, changes) => async (dispatch) => {
  //   const res = await axios.patch(
  //     `https://black-skirt.cyclic.app/products/update/${id}`,
  //     changes
  //   );

  const res = await fetch(
    `https://black-skirt.cyclic.app/products/update/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        auth: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI3MDRjNjlkMDM0YTg4ZTlkZjkyY2MiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODAzNDc3MzF9.ZlUL8Yby_MkpBA8KOzZZ0otnF811Wihexy43zycgqIc",
      },
      body: JSON.stringify(changes),
    }
  );
  const data = await res.json();
  if (data) {
    dispatch({ type: types.UPDATEPRODUCT, payload: data });
  }
};

export const AddProd = (details) => async (dispatch) => {
  try {
    const res = await fetch(`https://black-skirt.cyclic.app/products/add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        auth: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI3MDRjNjlkMDM0YTg4ZTlkZjkyY2MiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODAzNDc3MzF9.ZlUL8Yby_MkpBA8KOzZZ0otnF811Wihexy43zycgqIc",
      },
      body: JSON.stringify(details),
    });
    const data = await res.json();
    console.log("add", data);
    if (data) {
      dispatch({ type: types.ADDPRODUCT, payload: data.product });
    }
  } catch (err) {
    console.log("error", err);
  }
};

export const GetAdminDataRequest = () => async (dispatch) => {
  dispatch({ type: types.LOADING });
  try {
    const res = await axios.get(`https://black-skirt.cyclic.app/users`);
    dispatch({ type: types.GETADMINSDATA, payload: res.data });
  } catch (error) {
    dispatch({ type: types.ERROR });
  }
};
