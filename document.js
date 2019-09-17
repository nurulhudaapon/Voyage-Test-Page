const setEnv = env => {
  localStorage.setItem('env', env);
  location.reload();
};

document.querySelector('#env-name').innerText = currentEnv;
