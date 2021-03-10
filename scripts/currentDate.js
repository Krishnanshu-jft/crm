const currentdate = new Date(); 
const getCurrentTime = ()=>{
    const datetime = "Last Sync: " + currentdate.getDate() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getFullYear() + "-"  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    return datetime
}

module.exports = getCurrentTime