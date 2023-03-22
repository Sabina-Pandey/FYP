import React, { useEffect } from 'react'
import './Design.css'


const Design = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/641481c84247f20fefe68328/1gro1lu5f';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);
  return (

    <div className='Design'>
      <h1>Customize Your Own Design</h1>

    </div>



  )
}

export default Design