import React, {useEffect, useRef, useState} from "react";
import styles from './home_internet.module.css'
import stars from "../assets/images/Asset 1.svg";
import backImage from "../assets/images/Asset 2 (1).svg";
import box from "../assets/images/DEVICE_IMAGE_V2_w_SHDW.psd.svg";
import errorIcon from "../assets/images/Asset 2.svg";
import {BiSearch} from "react-icons/bi";
import arrow from "../assets/images/Asset 5.svg";
import {useDispatch, useSelector} from "react-redux";
import {storeNumberRequest} from "../redux/action/storeNumberAction";
import {Oval} from  'react-loader-spinner'


const Home_internet = ()=>{
    const [success,setSuccess]=useState(false)
    const [error,setError]=useState(false)
    const [initial,setInitial]=useState(true)
    const [click,setClick]=useState(false)
    const [textBtn,setTextBtn]=useState('CHECK AVAILABILITY')
    const [title,setTitle]=useState()
    const [code,setCode]=useState()
    const inputRef = useRef()
    const dispatch = useDispatch()
    const {data,status }= useSelector((state)=>state.storeNumber)

    const handleBtnClick = ()=>{
        if(initial) {
            setClick(!click)
            dispatch(storeNumberRequest(code))
        }
    }
    useEffect(()=>{
        setCode( Math.floor(Math.random() * 10000) + 90000)
        if(click){

            setClick(false)
            if(data !== undefined){
                if(data){
                    setSuccess(true)
                    setError(false)
                    setInitial(false)
                    setTextBtn('LEARN MORE')
                    setTitle('Congratulations!')
                }
                else {
                    setError(true)
                    setSuccess(false)
                    setInitial(false)
                    setTextBtn('LEARN MORE')
                    setTitle("We're sorry.")
                }
            }
        }
    },[click])

    return (
        <div className={styles.main_container}>
            <div className={styles.container}>

                {success &&
                <div className={styles.star_div}>
                    <img src={stars} className={styles.stars} alt=''/>
                </div>
                }

                {initial &&
                <div className={styles.header}>
                    <div className={styles.header_div}>
                        <span className={styles.unlimited}>Unlimited</span>
                        <span className={styles.home_internet}>Home Internet</span>
                        <span className={styles.only}>Only $45/mo</span>
                    </div>
                </div>
                }

                <img src={backImage} className={initial ? `${styles.back_image2}` : `${styles.back_image}`} alt=''/>

                {!initial &&
                <img src={box} className={styles.box} alt=''/>
                }

                {initial &&
                <div className={styles.box_div}>
                    <img src={box} className={styles.box} alt=''/>
                </div>
                }

                {error &&
                <div className={styles.errIcon_div}>
                    <img src={errorIcon} className={styles.error_icon} alt=''/>
                </div>
                }
            </div>

            <div className={styles.text_container} style={initial ? {background:'black'} : {background:'transparent'}}>

                {initial &&
                <div className={styles.line}> </div>
                }

                {!initial &&
                <span className={styles.title}>{title}</span>
                }

                <span className={styles.text1}>{error ? 'Home Internet by Straight Talk is currently not available in your store.' :
                    'Your store will be receiving the Home Internet Router by Straight Talk'}
                </span>

                {error &&
                <span className={styles.text1} > Please note that we are working on expanding coverage for additional stores.</span>
                }

                {success &&
                <div className={styles.empty}> </div>
                }
                {(status === 'loading') &&
                <Oval  color='#BEE81E' secondaryColor='#505050'/>
                }
                {initial &&
                <div className={styles.search_div}>
                    <BiSearch className={styles.searchIcon}/>
                    <input
                        type='text'
                        // placeholder='SEARCH'
                        className={styles.input}
                        value={code}
                        ref={inputRef}
                    />
                </div>
                }
                <button className={styles.btn} onClick={handleBtnClick}>
                    <span className={styles.btn_text}>{textBtn}</span>
                    <img src={arrow} className={styles.arrow} alt=''/>
                </button>

            </div>
        </div>
    )

}
export default Home_internet