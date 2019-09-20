const setEnv = env => {
  localStorage.setItem('env', env);
  location.reload();
};

const setPubGuid = (env)=>{
  localStorage.setItem(env+"-pubGuid");
}

document.querySelector('#env-name').innerText = currentEnv;
