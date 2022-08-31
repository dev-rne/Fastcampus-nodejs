const wait1Seconds = new Promise((resolve, reject) =>{
    reject("에러!!")
});

wait1Seconds.then(() => {
    console.log("프라미스 이행완료");
}).catch(err => console.log(err))