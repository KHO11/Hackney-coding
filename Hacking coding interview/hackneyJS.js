const URL = "";

/*axios({
    method:"get",
    url : URL,
    header : {
        "authorization" : 
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExNyIsImNvbnN1bWVyTmFtZSI6IkludGVydmlld3MiLCJjb25zdW1lclR5cGUiOiIxIiwibmJmIjoxNjE5Nzc1NTY2LCJleHAiOjE5MzUzMDgzNjYsImlhdCI6MTYxOTc3NTU2Nn0.OIbvEbkNecLDOky7bI_fi1r6yxgLxwcFAvy6hbvKpTY"
    }
})
    .then(function (response) {
        console.log(response.data);
        // I need this data here ^^
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });

/* regular expression : 
[A-Za-z][1-9] [1-9][A-Za-z]{2} 

*/

function axiosTest() {
    const promise = axios({
        method: "get",
        url : URL,
        header : {
            "authorization" : 
            ""
        }
    });

    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => console.log(response.data));

    // return it
    console.log(dataPromise);
    return dataPromise;
}

axiosTest()
    .then(data => {
        response.json({ message: 'Correct postcode', data });
    })
    .catch(err => console.log("Wrong postcode : " + err));
