import React, { useState } from 'react'
import UserNavabr from '../components/UserNavabr'
import BottomBar from '../components/BottomBar'
import { Input, Radio } from 'antd'
import './Home.css'
import backarrow from '../photos/backarrow.png'
import frontarrow from '../photos/frontarrow.png'

function Chekup() {














    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [chestPainType, setChestPainType] = useState('');
    const [bloodpress, setbloodpress] = useState('');
    const [cholesterol, setcholesterol] = useState('');
    const [sugarlevel, setsugarlevel] = useState('');
    const [electrocardiogram, setelectrocardiogram] = useState('');
    const [heartRate, setheartRate] = useState('');
    const [angina, setangina] = useState('');
    const [stdepress, setstdepress] = useState('');
    const [stsegment, setstsegment] = useState('');
    const [vessels, setvessels] = useState('');
    const [thal, setthal] = useState('');


    const [activeSlide, setActiveSlide] = useState(1);

    const goToSlide = (slideNumber) => {
        setActiveSlide(slideNumber);
    };

    const goToSlideback = (slideNumber) => {
        setActiveSlide(slideNumber);
    };

    const handleSexChange = (e) => {
        setSex(e.target.value);
    };

    const handleChestChange = (e) => {
        setChestPainType(e.target.value);
    };

    const handleSugarLevelChange = (e) => {
        setsugarlevel(e.target.value);
    };

    const handleElectrocardiChange = (e) => {
        setelectrocardiogram(e.target.value);
    };

    const handleAnginaExChange = (e) => {
        setangina(e.target.value);
    };

    const handleStSegmentChange = (e) => {
        setstsegment(e.target.value);
    };

    const handleVesselsChange = (e) => {
        setvessels(e.target.value);
    };

    const handleThalChange = (e) => {
        setthal(e.target.value);
    };





    return (
        <div className='chekup-12'>
            <div className="home2">
                <UserNavabr />
            </div>
            <div className="checkup12-content">

                <div className="slider-container">
                    <div className="create-blog-slider-box">
                        <div className="slide-container">

                            {/* Slide 1 */}


                            <div className={`slide ${activeSlide === 1 ? 'active' : 'hidden'}`}>
                                {/* Slide 1 content */}
                                <div className='slide3'>


                                    <div className="questionform">
                                        <div className='questionhead'>Question 1</div>
                                        <div className="questionask">How old are you?</div>
                                        <Input className="signinmodal-custom-input"
                                            value={age}
                                            onChange={(e) => { setAge(e.target.value) }}
                                        />
                                    </div>



                                    <div className='createblog-slide1-button23'>
                                        <button
                                            className="hsc-getins-b-button "
                                            onClick={() => goToSlide(2)}

                                        >
                                            <img className='hsc-getins-b-button-img' src={frontarrow} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 2 */}
                            <div className={`slide ${activeSlide === 2 ? 'active' : 'hidden'}`}>
                                <div className='slide3'>
                                    {/* Slide 2 content*/}
                                    <div className="crb-slide2-content-wrapper">
                                        <div className="questionform">

                                            <div className="questionhead">Question 2</div>
                                            <div className="questionask">Are you Male or Female?</div>
                                            <div className='radio-group-questions'>
                                                <Radio.Group onChange={handleSexChange} value={sex}>
                                                    <div className='radiogapmake'>
                                                        <Radio value={0}>Male</Radio>
                                                    </div>

                                                    <div className='radiogapmake'>
                                                        <Radio value={1}>Female</Radio>
                                                    </div>
                                                </Radio.Group>
                                            </div>
                                        </div>



                                        <div className="button-check-wrapper">
                                            <div className='createblog-slide1-button2'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(1)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={backarrow} />
                                                </button>
                                            </div>

                                            <div className='createblog-slide1-button'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(3)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={frontarrow} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Slide 3 */}
                            <div className={`slide ${activeSlide === 3 ? 'active' : 'hidden'}`}>
                                <div className='slide3'>
                                    {/* Slide 2 content*/}
                                    <div className="crb-slide2-content-wrapper">
                                        <div className="questionform">
                                            <div className="questionhead">Question 3</div>
                                            <div className="questionask">Please select the type of chest pain you are experiencing.</div>
                                            <div className='radio-group-questions'>
                                                <Radio.Group onChange={handleChestChange} value={chestPainType}>
                                                    <div className='radiogapmake'>
                                                        <Radio value={1}>Angina: Chest pain caused by reduced blood flow to the heart</Radio>
                                                    </div>

                                                    <div className='radiogapmake1'>
                                                        <Radio value={2}>Atypical Angina: Chest pain that is not typical of angina</Radio>
                                                    </div>

                                                    <div className='radiogapmake1'>
                                                        <Radio value={3}>Non-Anginal Pain: Chest pain that is not related to angina</Radio>
                                                    </div>

                                                    <div className='radiogapmake1'>
                                                        <Radio value={4}>Asymptomatic: No chest pain or discomfort</Radio>
                                                    </div>
                                                </Radio.Group>
                                            </div>
                                        </div>

                                        <div className="button-check-wrapper">
                                            <div className='createblog-slide1-button2'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(2)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={backarrow} />
                                                </button>
                                            </div>

                                            <div className='createblog-slide1-button'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(4)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={frontarrow} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 4 */}
                            <div className={`slide ${activeSlide === 4 ? 'active' : 'hidden'}`}>
                                <div className='slide3'>
                                    {/* Slide 2 content*/}
                                    <div className="crb-slide2-content-wrapper">
                                        <div className="questionform">
                                            <div className='questionhead'>Question 4</div>
                                            <div className="questionask">What is your resting blood pressure?</div>
                                            <Input className="signinmodal-custom-input"
                                                value={bloodpress}
                                                onChange={(e) => { setbloodpress(e.target.value) }}
                                            />
                                        </div>

                                        <div className="button-check-wrapper">
                                            <div className='createblog-slide1-button2'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(3)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={backarrow} />
                                                </button>
                                            </div>

                                            <div className='createblog-slide1-button'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(5)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={frontarrow} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Slide 5 */}
                            <div className={`slide ${activeSlide === 5 ? 'active' : 'hidden'}`}>
                                <div className='slide3'>
                                    {/* Slide 2 content*/}
                                    <div className="crb-slide2-content-wrapper">
                                        <div className="questionform">
                                            <div className='questionhead'>Question 5</div>
                                            <div className="questionask"> What is your serum cholesterol level in mg/dl?</div>
                                            <Input className="signinmodal-custom-input"
                                                value={cholesterol}
                                                onChange={(e) => { setcholesterol(e.target.value) }}
                                            />
                                        </div>

                                        <div className="button-check-wrapper">
                                            <div className='createblog-slide1-button2'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(4)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={backarrow} />
                                                </button>
                                            </div>

                                            <div className='createblog-slide1-button'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(6)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={frontarrow} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 6 */}
                            <div className={`slide ${activeSlide === 6 ? 'active' : 'hidden'}`}>
                                <div className='slide3'>
                                    {/* Slide 2 content*/}
                                    <div className="crb-slide2-content-wrapper">\
                                        <div className="questionform">

                                            <div className="questionhead">Question 6</div>
                                            <div className="questionask">Do you have fasting blood sugar levels greater than 120 mg/dl? </div>
                                            <div className='radio-group-questions'>
                                                <Radio.Group onChange={handleSugarLevelChange} value={sugarlevel}>
                                                    <div className='radiogapmake'>
                                                        <Radio value={1}>Yes</Radio>
                                                    </div>

                                                    <div className='radiogapmake'>
                                                        <Radio value={0}>No</Radio>
                                                    </div>
                                                </Radio.Group>
                                            </div>
                                        </div>

                                        <div className="button-check-wrapper">
                                            <div className='createblog-slide1-button2'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(5)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={backarrow} />
                                                </button>
                                            </div>

                                            <div className='createblog-slide1-button'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(7)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={frontarrow} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Slide 7 */}
                            <div className={`slide ${activeSlide === 7 ? 'active' : 'hidden'}`}>
                                <div className='slide3'>
                                    {/* Slide 2 content*/}
                                    <div className="crb-slide2-content-wrapper">
                                        <div className="questionform">
                                            <div className="questionhead">Question 7</div>
                                            <div className="questionask">Please select the type of chest pain you are experiencing.</div>
                                            <div className='radio-group-questions'>
                                                <Radio.Group onChange={handleElectrocardiChange} value={electrocardiogram}>
                                                    <div className='radiogapmake'>
                                                        <Radio value={0}>Normal: Normal ECG results </Radio>
                                                    </div>

                                                    <div className='radiogapmake1'>
                                                        <Radio value={1}>Abnormal: Abnormal ECG results</Radio>
                                                    </div>

                                                    <div className='radiogapmake1'>
                                                        <Radio value={2}>Showing Probable or Definite Left Ventricular Hypertrophy: ECG shows signs of left ventricular hypertrophy</Radio>
                                                    </div>

                                                </Radio.Group>
                                            </div>
                                        </div>

                                        <div className="button-check-wrapper">
                                            <div className='createblog-slide1-button2'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(6)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={backarrow} />
                                                </button>
                                            </div>

                                            <div className='createblog-slide1-button'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(8)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={frontarrow} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 8 */}
                            <div className={`slide ${activeSlide === 8 ? 'active' : 'hidden'}`}>
                                <div className='slide3'>
                                    {/* Slide 2 content*/}
                                    <div className="crb-slide2-content-wrapper">

                                        <div className="questionform">
                                            <div className='questionhead'>Question 8</div>
                                            <div className="questionask"> What is your maximum heart rate achieved?</div>
                                            <Input className="signinmodal-custom-input"
                                                value={heartRate}
                                                onChange={(e) => { setheartRate(e.target.value) }}
                                            />
                                        </div>

                                        <div className="button-check-wrapper">
                                            <div className='createblog-slide1-button2'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(7)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={backarrow} />
                                                </button>
                                            </div>

                                            <div className='createblog-slide1-button'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(9)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={frontarrow} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Slide 9 */}
                            <div className={`slide ${activeSlide === 9 ? 'active' : 'hidden'}`}>
                                <div className='slide3'>
                                    {/* Slide 2 content*/}
                                    <div className="crb-slide2-content-wrapper">
                                        <div className="questionform">

                                            <div className="questionhead">Question 9</div>
                                            <div className="questionask">Do you experience angina during exercise?  </div>
                                            <div className='radio-group-questions'>
                                                <Radio.Group onChange={handleAnginaExChange} value={angina}>
                                                    <div className='radiogapmake'>
                                                        <Radio value={1}>Yes</Radio>
                                                    </div>

                                                    <div className='radiogapmake'>
                                                        <Radio value={0}>No</Radio>
                                                    </div>
                                                </Radio.Group>
                                            </div>
                                        </div>
                                        <div className="button-check-wrapper">
                                            <div className='createblog-slide1-button2'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(8)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={backarrow} />
                                                </button>
                                            </div>

                                            <div className='createblog-slide1-button'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(10)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={frontarrow} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 10 */}
                            <div className={`slide ${activeSlide === 10 ? 'active' : 'hidden'}`}>
                                <div className='slide3'>
                                    {/* Slide 2 content*/}
                                    <div className="crb-slide2-content-wrapper">
                                        <div className="questionform">
                                            <div className='questionhead'>Question 10</div>
                                            <div className="questionask">  Please provide the ST depression value induced by exercise relative to rest. (ST refers to changes in the ECG waveform)</div>
                                            <Input className="signinmodal-custom-input"
                                                value={stdepress}
                                                onChange={(e) => { setstdepress(e.target.value) }}
                                            />
                                        </div>
                                        <div className="button-check-wrapper">
                                            <div className='createblog-slide1-button2'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(9)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={backarrow} />
                                                </button>
                                            </div>

                                            <div className='createblog-slide1-button'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(11)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={frontarrow} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 11 */}
                            <div className={`slide ${activeSlide === 11 ? 'active' : 'hidden'}`}>
                                <div className='slide3'>
                                    {/* Slide 2 content*/}
                                    <div className="crb-slide2-content-wrapper">
                                        <div className="questionform">
                                            <div className="questionhead">Question 11</div>
                                            <div className="questionask">Please select the slope of the peak exercise ST segment. (ST segment is a portion of the ECG waveform)</div>
                                            <div className='radio-group-questions'>
                                                <Radio.Group onChange={handleStSegmentChange} value={stsegment}>
                                                    <div className='radiogapmake'>
                                                        <Radio value={0}>Upsloping: ST segment slope is upsloping</Radio>
                                                    </div>

                                                    <div className='radiogapmake1'>
                                                        <Radio value={1}>Flat: ST segment slope is flat</Radio>
                                                    </div>

                                                    <div className='radiogapmake1'>
                                                        <Radio value={2}>Down sloping: ST segment slope is down sloping</Radio>
                                                    </div>

                                                </Radio.Group>
                                            </div>
                                        </div>

                                        <div className="button-check-wrapper">
                                            <div className='createblog-slide1-button2'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(10)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={backarrow} />
                                                </button>
                                            </div>

                                            <div className='createblog-slide1-button'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(12)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={frontarrow} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 12 */}
                            <div className={`slide ${activeSlide === 12 ? 'active' : 'hidden'}`}>
                                <div className='slide3'>
                                    {/* Slide 2 content*/}
                                    <div className="crb-slide2-content-wrapper">
                                        <div className="questionform">
                                            <div className="questionhead">Question 12</div>
                                            <div className="questionask">How many major vessels are colored by fluoroscopy?</div>
                                            <div className='radio-group-questions'>
                                                <Radio.Group onChange={handleVesselsChange} value={vessels}>
                                                    <div className='radiogapmake'>
                                                        <Radio value={0}>0</Radio>
                                                    </div>

                                                    <div className='radiogapmake1'>
                                                        <Radio value={1}>1</Radio>
                                                    </div>

                                                    <div className='radiogapmake1'>
                                                        <Radio value={2}>2</Radio>
                                                    </div>

                                                </Radio.Group>
                                            </div>
                                        </div>
                                        <div className="button-check-wrapper">
                                            <div className='createblog-slide1-button2'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(11)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={backarrow} />
                                                </button>
                                            </div>

                                            <div className='createblog-slide1-button'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(13)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={frontarrow} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 13 */}
                            <div className={`slide ${activeSlide === 13 ? 'active' : 'hidden'}`}>
                                <div className='slide3'>
                                    {/* Slide 2 content*/}
                                    <div className="crb-slide2-content-wrapper">
                                        <div className="questionform">
                                            <div className="questionhead">Question 13</div>
                                            <div className="questionask">Please select your Thalassemia result</div>
                                            <div className='radio-group-questions'>
                                                <Radio.Group onChange={handleThalChange} value={thal}>
                                                    <div className='radiogapmake'>
                                                        <Radio value={0}>Normal: No Thalassemia</Radio>
                                                    </div>

                                                    <div className='radiogapmake1'>
                                                        <Radio value={1}>Fixed Defect: Fixed Thalassemia defect </Radio>
                                                    </div>

                                                    <div className='radiogapmake1'>
                                                        <Radio value={2}>Reversible Defect: Reversible Thalassemia defect</Radio>
                                                    </div>

                                                </Radio.Group>
                                            </div>
                                        </div>
                                        <div className="button-check-wrapper">
                                            <div className='createblog-slide1-button2'>
                                                <button
                                                    className="hsc-getins-b-button "
                                                    onClick={() => goToSlide(12)}
                                                >
                                                    <img className='hsc-getins-b-button-img' src={backarrow} />
                                                </button>
                                            </div>

                                            <div className='createblog-slide1-button'>
                                                <button
                                                    className="hsc-getins-b-button "

                                                >
                                                    <img className='hsc-getins-b-button-img' src={frontarrow} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

            </div>

            <div className='bottombar'>
                <BottomBar />
            </div>
        </div>
    )
}

export default Chekup