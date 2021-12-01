import React from 'react';
import styles from './Slide.module.css';

function Slide() {

  const [data, setData] = React.useState([]);
  const carousel = React.useRef(null);

  React.useEffect(() => {
    fetch(`./static/json/nikeSb.json`)
    .then((response) => response.json())
    .then(setData)
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
      carousel.current.scrollLeft -= carousel.current.offsetWidth;

    console.log(carousel.current.scrollLeft)

  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;

    console.log(carousel.current.offsetWidth)
  }

  if (!data || !data.length) return null;

  return (
    <div className={styles.container}>
      <div className={styles.carousel} ref={carousel}>
        {data.map((item) => {
          const { id, name, price, OldPrice, image } = item;
          return (
            <div className={styles.item} key={id}>
              <div className={styles.image}>
                <img src={image[0]} alt={name} />
              </div>
              <div className={styles.info}>
                <span className={styles.name}>{name}</span>
                <span className={styles.oldPrice}>R$ {OldPrice}</span>
                <span className={styles.price}>R$ {price}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.buttons}>
        <button onClick={handleLeftClick}>
          &laquo;
        </button>
        <button onClick={handleRightClick}>
          &raquo;
        </button>
      </div>
    </div>
  )
}

export default Slide;
