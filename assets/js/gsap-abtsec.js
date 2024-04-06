gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.abt-para')

        splitTypes.forEach((char,i) => {

            const text = new SplitType(char, { types:'chars,words'})
        

                gsap.from(text.chars,{
                    scrollTrigger: {
                        trigger:char,
                        start:"top 40%",
                        end:'+=300%',
                        scrub: .1,
                        markers: true
                    },
                    opacity: 0.1,
                    stagger: .1
                })

        })

        var tl = gsap.timeline({scrollTrigger:{
            trigger:".about-section",
            start:"top top",
            end:"+=300%",
            scrub:true,
            pin:true,
            markers:{
                startColor:"purple",
                endColor:"fuchsia",
            }
        }});


// const splitTypes2 = document.querySelectorAll('.text-reveal2')

//         splitTypes2.forEach((char,i) => {

//             const text = new SplitType(char, { types:'chars,words'})
        

//             gsap.from(text.chars,{
//                 scrollTrigger: {
//                     trigger:char,
//                     start:"40% 40%",
//                     end:'130% 40%',
//                     scrub: true,
//                     markers: true
//                 },
//                 opacity: 0.4,
//                 stagger: 0.1
//             })

//         })


//         var tl = gsap.timeline({scrollTrigger:{
//             trigger:".item2",
//             start:"50% 50%",
//             end:"100% 50%",
//             scrub:true,
//             pin:true,
//             markers:{
//                 startColor:"yellow",
//                 endColor:"black",
//             }
//         }})


// const lenis = new Lenis()

//         lenis.on('scroll', (e) => {
//         console.log(e)
//         })

//         function raf(time) {
//         lenis.raf(time)
//         requestAnimationFrame(raf)
//         }

//         requestAnimationFrame(raf)