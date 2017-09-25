// 'use strict';
//
// const React = require('react');
//
// const Carousel = require('nuka-carousel');
//
// const ResumePropTypes = require('../../prop_types/resume');
//
// const Entry = React.createClass({
//     propTypes: {
//         entry: ResumePropTypes.references
//     },
//
//     render: function () {
//         const parts = this.props.entry.name.split(':');
//         const _name = parts[0];
//         const position = parts[1];
//         const company = parts[2];
//
//         return (
//             <div>
//                 <blockquote>
//                     <p>{this.props.entry.reference}</p>
//                     <cite>
//                         {_name}
//                         <br/>
//                         &nbsp;&nbsp;&nbsp;&nbsp;
//                         {position + ', ' + company}
//                     </cite>
//                 </blockquote>
//             </div>
//         );
//     }
// });
//
// const References = React.createClass({
//     propTypes: {
//         content: ResumePropTypes.referencesSet
//     },
//
//     render: function () {
//         const carouselConfig = {
//             autoplay: false,
//             decorators: [],
//             framePadding: '10px',
//             cellSpacing: 30,
//             wrapAround: true
//         };
//         return (
//             <section id='testimonials'>
//                 <div className='text-container'>
//                     <div className='row'>
//                         <div className='two columns header-col'>
//                             <h1>
//                                 <span>References</span>
//                             </h1>
//                         </div>
//                         <div className='ten columns flex-container'>
//                             <div className='flexslider'>
//                                 <Carousel
//                                     autoplay={carouselConfig.autoplay}
//                                     decorators={carouselConfig.decorators}
//                                     wrapAround={carouselConfig.wrapAround}>
//                                     {this.props.content.map(function (entry, index) {
//                                         return (
//                                             <Entry key={index} entry={entry}/>
//                                         );
//                                     })}
//                                 </Carousel>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// });
//
// module.exports = References;
