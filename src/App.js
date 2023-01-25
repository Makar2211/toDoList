import React from 'react';
import styles from './todoStyle.module.scss';
function App() {
  const [toDo, SetToDo] = React.useState([]);
  const [input, setInput] = React.useState('');

  const OnClickPush = () => {
    if (input !== '') {
      SetToDo([...toDo, input]);
      setInput('');
    }
  };
  const onDeleteTOdO = (t) => {
    const deleteToDo = toDo.filter((dODelete) => {
      return dODelete !== t;
    });
    SetToDo(deleteToDo);
  };
  return (
    <>
      <div className={styles.App}>
        <h1>React TODO APP</h1>
        <input
          type='text'
          placeholder='search todo'
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={OnClickPush}>отправить</button>
        {toDo.length > 0 ? (
          toDo.map((t, index) => {
            return (
              <div className={styles.todos}>
                <li style={{ listStyleType: 'none' }} key={index}>
                  {t}
                </li>
                <button onClick={() => onDeleteTOdO(t)}>Удалить</button>
              </div>
            );
          })
        ) : (
          <h2>Вы ничего не добавили в toDo list</h2>
        )}
      </div>
    </>
  );
}

export default App;
