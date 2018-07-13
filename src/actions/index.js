
export const getTemprature = (city) => {
  return async (dispatch, getState) => {
      fetch('https://api.weatherbit.io/v2.0/current?city='+ city +'&key=e94a0d3bc6624eeeb5c7a36b479b3682', {
          method:'GET',
          mode: 'cors',
        }).then((data) => data.json()).then((dataJson) => {
            console.log("responce data", dataJson);
            dispatch({
                type: 'GET_TEMPRATURE',
                payload : dataJson.data[0].app_temp
                })
        })
  
  }
}