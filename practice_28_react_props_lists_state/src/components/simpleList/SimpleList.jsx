
import { SimpleParagraph } from '../simpleParagraph/SimpleParagraph';
import classes from './SimpleList.module.css';

export default function SimpleList( {listHeaderText, listSource, theme} ) {

    return (
      <>
        {
          !!listHeaderText && <h4 className={classes.listHeader}>{listHeaderText}</h4>
        }
        {
          (listSource && listSource.length > 0) ? (
            <ul class={classes.list}>
              {
                listSource.map( elem => <li className={classes.listItem} key={elem}><SimpleParagraph textContent={elem} currentTheme={theme}/></li>)
              }
            </ul>
          ) :
          <p>Empty dataSource!</p>
        }

      </>
    )
}