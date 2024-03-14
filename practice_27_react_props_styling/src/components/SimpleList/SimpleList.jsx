import style from './SimpleList.module.css';


export default function SimpleList({ listHeaderText, listSource, listItemCLickHandler}) {

  return (
    <>
      {listHeaderText && (<h4 className={style.listHeader}>{listHeaderText}</h4>)}
      {listSource && listSource.length > 0 ? (
      <ul>
          {listSource.map((elem) => (
            <li className={style.listItem} onClick={listItemCLickHandler} key={elem}>{elem}</li>
          ))}
      </ul>
        ) : (
          <p>Empty datasource!</p>
        )}
    </>
  );
}
