import backgroundImage from '../../Images/pexels-naimbic-2030037.jpg'

function backgroundImg() {
  return (
    <div className='bckgImg'>
      <img  src={backgroundImage} alt="background" />
      <div className='middle'>
        <div class="imageText">Benvenuto!</div>
      </div>
    </div>
  );
}

export default backgroundImg;