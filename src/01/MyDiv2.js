const MyDiv2 = () => {

  const myName = '강혜진';
  const myGit = 'https://github.com/beeguriri';
  console.log(myName);

  return (                       
    <div> 
      <p>{myName}</p>
      <p>GitHub : <a href = {myGit}>{myGit}</a></p>
    </div>
  );
}

export default MyDiv2;               