// import React, { PropTypes, Component } from 'react'

// // const yandex = () => {
// //   const script = document.createElement("script")
// //   script.src = "test"
// //   script.async = true
// //   return script
// // }

// // const facebook = () => {
// //   const script = document.createElement("script")
// //   script.src = "test2"
// //   script.async = true
// //   return script
// // }

// // const emailjs = () => {
// //   const script = document.createElement("script")
// //   script.src = "test3"
// //   script.async = true
// //   return script
// // }

// export default class Vendor extends Component {

//   // componentDidMount() {
//   //   if (DEV) {
//   //     // const script = document.createElement("script")
//   //     // script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=wG6Fe7o8YH3RQ8vsuFDXimjPPmOgYFYZ&amp;width=100%&amp;height=400&amp;lang=ru_RU&amp;sourceType=constructor&amp;scroll=true"
//   //     // script.async = true
//   //     // this.refs.yandex.appendChild(script)
//   //     // this.refs.yandex.appendChild(yandex())
//   //     // this.refs.facebook.appendChild(facebook())
//   //     // this.refs.email.appendChild(emailjs())
//   //   }
//   // }

//   cleverCallback() {
//     return(
//       <script src="https://my.clevercallback.com/callback.js" async type="text/javascript" charSet="utf-8"></script>
//     )
//   }

//   metrikaCounter() {
//     return (
//       <div>
//         <script type="text/javascript">
//             (function (d, w, c) {
//                 (w[c] = w[c] || []).push(function() {
//                     try {
//                         w.yaCounter41977889 = new Ya.Metrika({
//                             id:41977889,
//                             clickmap:true,
//                             trackLinks:true,
//                             accurateTrackBounce:true,
//                             webvisor:true
//                         });
//                     } catch(e) { }
//                 });

//                 var n = d.getElementsByTagName("script")[0],
//                     s = d.createElement("script"),
//                     f = function () { n.parentNode.insertBefore(s, n); };
//                 s.type = "text/javascript";
//                 s.async = true;
//                 s.src = "https://mc.yandex.ru/metrika/watch.js";

//                 if (w.opera == "[object Opera]") {
//                     d.addEventListener("DOMContentLoaded", f, false);
//                 } else { f(); }
//             })(document, window, "yandex_metrika_callbacks");
//         </script>
//         <noscript><div><img src="https://mc.yandex.ru/watch/41977889" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
//       </div>
//     )
//   }

//   render() {
//     return (
//       <div>
//         { this.cleverCallback() }
//         { this.metrikaCounter() }
//       </div>
//     )
//   }

// }




//         // <!-- Facebook Pixel Code -->
//         // <script>
//         // !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//         // n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
//         // n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
//         // t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
//         // document,'script','https://connect.facebook.net/en_US/fbevents.js');
//         // fbq('init', '176314032865906'); // Insert your pixel ID here.
//         // fbq('track', 'PageView');
//         // </script>
//         // <noscript><img height="1" width="1" style="display:none"
//         // src="https://www.facebook.com/tr?id=176314032865906&ev=PageView&noscript=1"
//         // /></noscript>
//         // <!-- End Facebook Pixel Code -->

//         // <!-- VK Pixel Code -->
//         // <script type="text/javascript">(window.Image ? (new Image()) : document.createElement('img')).src = location.protocol + '//vk.com/rtrg?r=oUKc7GryUf4YZJcljaTPoLeyGafmsRgqRnK81EBnIh274kaj*GpwXdZrFQ4XbjzxfCsk2ntMgzagGc32c1FM/Yyx2eaxQDuiPe8i7Y7TJmvO*xN76GnketJ2ABifcLUwPVnyGNQzNf2Cz45MCPxBPjx/wrjAeYcf748vmSC6R/Q-&pixel_id=1000095112';</script>
//         // <!-- VK Pixel Code -->

//         // <!-- send images -->
//         // <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
//         // <script type="text/javascript">
//         //    (function(){
//         //       emailjs.init("user_kyH6IK7l6VJW8D0i5acE2");
//         //    })();
//         // </script>
//         // <!-- send images -->


