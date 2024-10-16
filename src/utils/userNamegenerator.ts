export const userNameGenerate = (name:string):string=>{
    const getFirstName = name.split(" ")[0];
    const getSmallCaseName = getFirstName?.toLowerCase();
    const generateRandomNumber = Math.floor(Math.random() * 1000);
    const completedUserName = `${getSmallCaseName}${generateRandomNumber}`
    return completedUserName;

}