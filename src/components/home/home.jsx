import './home.css';
import { Helmet } from 'react-helmet';
import logo from '../../assets/images/Roodi.png';
import placeholder from '../../assets/images/phoneplaceholder.png';

const Home = () => {
  return (
    <>
      {/* all meta information regarding this page  */}
      <Helmet>
        <title>Home | Roodi</title>
      </Helmet>

      <div className='relative'>
        <div className='w-full h-[108px] flex items-center justify-center lg:justify-start lg:h-[99px] lg:border-b-[2px] lg:border-[#351D6B59]'>
          <img className='w-[205px] h-[175px]' src={logo} alt='roodi logo' />
        </div>

        {/* mobile svg  */}
        <svg
          className='absolute top-[54px] z-[-1] w-full lg:hidden'
          width='100%'
          height='860'
          viewBox='0 0 393 795'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='-19.6906'
            y='0.160034'
            width='714.491'
            height='559.709'
            transform='rotate(23 -19.6906 0.160034)'
            fill='#E4D9FE'
          />
        </svg>

        {/* desktop svg */}
        <svg
          className='lg:absolute lg:top-[96.58px] lg:z-[-1] lg:w-full lg:block hidden'
          width='1590.03'
          height='1100'
          viewBox='0 0 1280 1072'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='-13.1287'
            y='0.575592'
            width='1590.03'
            height='618.699'
            transform='rotate(17.6012 -13.1287 0.575592)'
            fill='#E4D9FE'
          />
        </svg>

        <div className=' min-h-[228px] mx-[20px] mt-[92px] lg:mx-[100px]'>
          <h1 className='font-[700] text-[42px] leading-[57.29px] lg:top-[211px] lg:w-[544px] lg:h-[356px] lg:text-[65px] lg:leading-[88.66px]'>
            Accelerate growth with a happier teaching experience.
          </h1>
        </div>

        <div className=' min-h-[125px] mx-[20px] mt-[34px] lg:mx-[100px]'>
          <p className='leading-[24.55px] text-[18px] lg:w-[636px] lg:h-[152px] lg:font-[300] lg:text-[28px] lg:leading-[38.19px]'>
            Roodi enables you to save 500+ hours spent on admin duties, empowers
            your teachers with simplified classroom management, and allows you
            to focus on growing your school population.
          </p>
        </div>

        <div className=' mx-[20px] mt-[60px] lg:mx-[100px]'>
          <button className='lg:w-[353px] lg:h-[48px]'>
            JOIN THE WAITLIST
          </button>
        </div>
      </div>

      <div className=' min-h-[582px] mx-[20px] mt-[43px] flex items-center justify-center lg:w-[297.94px] lg:absolute lg:top-[219px] lg:left-[852px]'>
        <img className='w-[289px] lg:w-fuull' src={placeholder} alt='Roodi' />
      </div>

      <div className=' min-h-[1093px] mt-[17px]'>
        <div className=' mx-[20px] lg:mx-0'>
          <section className='one lg:mt-[223px] lg:relative'>
            <h2 className='font-[700] text-[36px] leading-[49.1px] mt-[26px] min-h-[147px] lg:mx-[100px] lg:w-[818px] lg:h-[164px] lg:text-[60px] lg:leading-[81.84px]'>
              Endless benefits, engineered precisely for you.
            </h2>

            <p className='leading-[24.55px] text-[18px] mt-[20px] min-h-[50px] lg:mx-[100px] lg:mt-[30px] lg:w-[818px] lg:h-[76px] lg:text-[28px] lg:leading-[38.19px]'>
              Discover how Roodi transforms your school into a paragon of modern
              education.
            </p>

            {/* one */}
            <div className='relative mt-[10.85px] flex lg:mx-[100px] lg:mt-[100px]'>
              <b className='absolute z-[-1] top-[30px]'>1</b>
              <h3 className='font-[600] text-[26px] leading-[35.46px] min-h-[105px] ml-[30px] mt-[75px] lg:text-[45px] lg:w-[562px] lg:h-[183px] lg:leading-[61.38px]'>
                Streamline attendance and detect health risk early with Roll
                Call™
              </h3>
            </div>

            <p className='leading-[21.82px] text-[16px] ml-[30px] mt-[20px] min-h-[88px] lg:mx-[130px] lg:mt-[40px] lg:text-[25px] lg:leading-[34.1px] lg:font-[300] lg:w-[562px] lg:h-[136px]'>
              Help your teachers go the extra mile by capturing classroom
              attendance alongside students’ wellbeing. Now, you can read the
              mood in your whole school in real time.
            </p>

            <div className='flex items-center justify-center w-full min-h-[522px] mt-[40px] lg:h-[550px] lg:w-[272.89px] lg:absolute lg:top-[451px] lg:left-[861px]'>
              <img className='w-[259px]' src={placeholder} alt='Roodi' />
            </div>
          </section>

          {/* two */}
          <section className='two lg:relative lg:h-[730px]'>
            <div className='relative mt-[29.85] flex lg:mt-[205px] lg:ml-[579px]'>
              <b className='absolute z-[-1] top-[30px] even'>2</b>
              <h3 className='font-[600] text-[26px] leading-[35.46px] min-h-[105px] ml-[30px] mt-[75px] lg:w-[601px] lg:h-[183px] lg:text-[45px] lg:leading-[61.38px]'>
                The parent-teacher communication tool that keeps you in the loop
                24/7
              </h3>
            </div>

            <p className='leading-[21.82px] text-[16px] ml-[30px] mt-[20px] min-h-[88px] lg:w-[601px] lg:h-[136px] lg:ml-[610px] lg:font-[300] lg:text-[25px] lg:leading-[34.1px] lg:mt-[40px]'>
              Correspondence™ allows teachers to communicate with parents
              without revealing contact details. You also control the narrative
              by approving which messages get delivered to parents.
            </p>

            <div className='flex items-center justify-center w-full min-h-[522px] mt-[40px] lg:h-[550px] lg:w-[272.89px] lg:absolute lg:top-[97px] lg:left-[146px]'>
              <img className='w-[259px]' src={placeholder} alt='Roodi' />
            </div>
          </section>

          {/* three */}
          <section className='one lg:relative lg:h-[730px]'>
            <div className='relative mt-[29.85] flex lg:mx-[100px] lg:mt-[100px]'>
              <b className='absolute z-[-1] top-[30px]'>3</b>
              <h3 className='font-[600] text-[26px] leading-[35.46px] min-h-[105px] ml-[30px] mt-[75px] lg:text-[45px] lg:w-[562px] lg:h-[183px] lg:leading-[61.38px]'>
                Securely record all your students’ scores in one database
              </h3>
            </div>

            <p className='leading-[21.82px] text-[16px] ml-[30px] mt-[20px] min-h-[88px] lg:mx-[130px] lg:mt-[40px] lg:text-[25px] lg:leading-[34.1px] lg:font-[300] lg:w-[562px] lg:h-[136px]'>
              Roodi removes the hassles of managing spreadsheets and keeps your
              records secure with top-grade security. Empower your teachers with
              the tool to record test and exam scores easily.
            </p>

            <div className='flex items-center justify-center w-full min-h-[522px] mt-[40px] lg:h-[550px] lg:w-[272.89px] lg:absolute lg:top-[97px] lg:left-[838px]'>
              <img className='w-[259px]' src={placeholder} alt='Roodi' />
            </div>
          </section>

          {/* four */}
          <section className='two lg:relative lg:h-[730px]'>
            <div className='relative mt-[29.85] flex lg:mt-[205px] lg:ml-[579px]'>
              <b className='absolute z-[-1] top-[30px] even'>4</b>
              <h3 className='font-[600] text-[26px] leading-[35.46px] min-h-[105px] ml-[30px] mt-[75px] lg:w-[601px] lg:h-[183px] lg:text-[45px] lg:leading-[61.38px]'>
                Generate hundreds of Report Cards™ in 2 minutes
              </h3>
            </div>

            <p className='leading-[21.82px] text-[16px] ml-[30px] mt-[20px] min-h-[88px] lg:w-[601px] lg:h-[136px] lg:ml-[610px] lg:font-[300] lg:text-[25px] lg:leading-[34.1px] lg:mt-[40px]'>
              Report card compilation don’t have to take weeks. With Roodi, you
              generate Report Cards™ for all your students instantly. Now,
              parents receive their children’s report faster and your holidays
              start sooner.
            </p>

            <div className='flex items-center justify-center w-full min-h-[522px] mt-[40px] lg:h-[550px] lg:w-[272.89px] lg:absolute lg:top-[97px] lg:left-[146px]'>
              <img className='w-[259px]' src={placeholder} alt='Roodi' />
            </div>
          </section>

          {/* five */}
          <section className='one lg:relative lg:h-[730px]'>
            <div className='relative mt-[29.85] flex lg:mx-[100px] lg:mt-[100px]'>
              <b className='absolute z-[-1] top-[30px]'>5</b>
              <h3 className='font-[600] text-[26px] leading-[35.46px] min-h-[105px] ml-[30px] mt-[75px] lg:text-[45px] lg:w-[562px] lg:h-[183px] lg:leading-[61.38px]'>
                Increase parent engagement with Homework™ assignments
              </h3>
            </div>

            <p className='leading-[21.82px] text-[16px] ml-[30px] mt-[20px] min-h-[88px] lg:mx-[130px] lg:mt-[40px] lg:text-[25px] lg:leading-[34.1px] lg:font-[300] lg:w-[562px] lg:h-[136px]'>
              Roodi remedies low parent engagement experienced in communication
              books by enabling your teachers to securely assign home works that
              get delivered with notifications to drive parents into action.
            </p>

            <div className='flex items-center justify-center w-full min-h-[522px] mt-[40px] lg:h-[550px] lg:w-[272.89px] lg:absolute lg:top-[97px] lg:left-[838px]'>
              <img className='w-[259px]' src={placeholder} alt='Roodi' />
            </div>
          </section>
        </div>

        <div className='relative min-h-[720.75px] lg:h-[903px]'>
          {/* mobile svg  */}
          <svg
            className='absolute top-[14.67px] z-[-1] w-full lg:hidden'
            width='500'
            height='752'
            viewBox='0 0 393 722'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='-3.17944'
              y='0.669922'
              width='655.459'
              height='500.975'
              transform='rotate(23.5 -3.17944 0.669922)'
              fill='#E4D9FE'
            />
          </svg>

          <svg
            className='lg:absolute lg:top-[16.58px] lg:z-[-1] lg:w-full lg:block hidden'
            width='1280'
            height='993'
            viewBox='0 0 1280 993'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='-404'
              y='384.068'
              width='1848.29'
              height='622.451'
              transform='rotate(-11.9932 -404 384.068)'
              fill='#E4D9FE'
            />
          </svg>

          <div className='mx-[20px] z-[1] max-w-full overflow-hidden lg:flex lg:flex-col lg:items-center'>
            <h2 className='font-[700] text-[40px] leading-[54.56px] mt-[145.33px] min-h-[165px] lg:h-[178px] lg:w-[772px] lg:mt-[251px] lg:text-[65px] lg:leading-[88.66px] lg:text-center'>
              Become an early adopter, pay 70% less forever.
              <svg
                className='max-w-100%'
                width='100%'
                height='22'
                viewBox='0 0 333 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2 16.0867C11.9897 15.3292 22.3574 13.5924 32.2918 12.1624C48.7584 9.79218 65.7172 9.2934 82.299 7.69314C97.8515 6.19222 113.406 5.1346 128.969 3.82339C141.999 2.7256 155.092 3.51709 168.143 2.56981C190.64 0.936834 213.291 3.33286 235.76 3.33286C255.904 3.33286 278.185 1.98403 297.73 7.74764C303.543 9.46159 306.403 12.6183 306.048 19.0299C305.934 21.0857 297.13 19.6893 297.782 16.5772C298.478 13.2499 306.301 12.1624 308.82 12.1624C316.215 12.1624 323.638 10.2003 331 10.2003'
                  stroke='#FFA100'
                  stroke-width='4'
                  stroke-linecap='round'
                />
              </svg>
            </h2>

            <p className='leading-[24.55px] text-[18px] mt-[30px] min-h-[125px] lg:h-[114px] lg:w-[922px] lg:text-[28px] lg:font-[300] lg:leading-[38.19px] lg:mt-[50px]'>
              Roodi will be released in time for the new term starting April.
              Get ahead of competing schools, become an early adopter to enjoy
              3-month free trial, and pay 70% less than other schools.
            </p>

            <div className='mx-[20px] mt-[30px] lg:w-[353px] lg:h-[48px]'>
              <button>JOIN THE WAITLIST</button>
            </div>
          </div>
        </div>

        <div className='mx-[20px] mt-[26.54px] lg:h-[716px] lg:w-[636px] lg:mx-auto lg:mt-[9px]'>
          <div className='min-h-[738px] border-[2px] border-[#351D6B4D] rounded-[15px] px-[5%] lg:flex lg:flex-col lg:items-center'>
            <h2 className='w-full font-[700] text-[38px] leading-[51.83px mt-[50px] min-h-[104px] lg:w-[582px] lg:h-[61px] lg:text-[45px] lg:text-center lg:leading-[61.38px] lg:mt-[30px]'>
              See how much you’d save.
            </h2>

            <p className='w-full leading-[24.55px] text-[18px] mt-[17px] min-h-[25px] lg:h-[34px] lg:w-[564px] lg:mt-[40px] lg:text-center lg:leading-[34.1px] lg:text-[25px]'>
              How many students do you have?
            </p>

            <div className='w-full min-h-[60px] mt-[23px] bg-[#E4D9FE82] rounded-[10px] border-b-[4px] border-b-[#FFA100] flex items-center pl-[15px] lg:h-[80px] lg:w-[500px] lg:pl-[30px] lg:text-[35px] lg:mt-[35px]'>
              100
            </div>

            <h3 className='mt-[60px] text-center w-full leading-[34px] text-[26px] min-h-[35px]'>
              Other schools will pay
            </h3>

            <h3 className='text-center w-full mt-[5px] min-h-[49px] text-[28px] leading-[38.19px]'>
              <span className='font-[700] text-[30px] leading-[40.82px] relative'>
                <svg
                  className='absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                  width='168'
                  height='14'
                  viewBox='0 0 168 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2.0828 11.6985C13.8819 13.1069 25.7855 12.0183 37.6197 11.4575C65.2426 10.1485 92.7649 9.26578 120.227 5.82758C132.439 4.29858 144.631 2.44869 156.964 2.22344C160.066 2.16678 163.241 1.37478 166.255 1.73455'
                    stroke='#A21D56'
                    stroke-width='3'
                    stroke-linecap='round'
                  />
                </svg>
                N4,080,000{' '}
              </span>
              /year
            </h3>

            <h3 className='mt-[40px] text-center text-[26px] leading-[35.46px] min-h-[35px]'>
              You’ll pay
            </h3>

            <h3 className='mt-[4px] min-h-[55px] text-center text-[32px] leading-[43.65px]'>
              <span className='font-[700] text-[40px] leading-[54.65px]'>
                N1,200,000{' '}
              </span>
              /year
            </h3>

            <div className='w-full flex items-center justify-center'>
              <button className='special min-h-[39px] mt-[5px] text-[20px] max-w-[218px]'>
                <span className='font-normal'>Save </span>&nbsp;N2,820,000
              </button>
            </div>
          </div>
        </div>

        <section className='two lg:h-[1061px] lg:mt-[70px]'>
          <div className=' mx-[20px] min-h-[1090px] lg:w-full'>
            <p className='min-h-[19px] font-[700] text-[14px] mt-[121px] lg:h-[34px] lg:w-[941px] lg:mx-auto lg:text-center lg:mt-[108px] lg:text-[25px] lg:leading-[34.1px]'>
              Dependable education technology
            </p>

            <h2 className='mt-[10px] font-[600] text-[36px] leading-[49.1px] min-h-[147px] lg:w-[940px] lg:h-[164px] lg:mt-[0px] lg:text-center lg:text-[60px] lg:mx-auto lg:leading-[81.84px]'>
              Designed to help you run schools that are modern and fast.
            </h2>

            <div className=' lg:flex lg:mx-[100px] lg:flex-wrap lg:justify-around'>
              <div className='mt-[43px]'>
                <h3 className='font-[700] text-[20px] leading-[27.28px] min-h-[27px] lg:h-[] lg:text-[32px] lg:leading-[43.65px]'>
                  <span className='text-[#FFA100] font-[1000] text-[30px]'>
                    _&nbsp;
                  </span>
                  Easy to use
                </h3>

                <p className='mt-[10px] text-[16px] leading-[21.28px] min-h-[44px] lg:text-[25px] lg:leading-[34.1px] lg:w-[412px] lg:h-[102px]'>
                  With a modern and minimalistic design, using Roodi is as easy
                  as texting on WhatsApp.
                </p>
              </div>

              <div className='mt-[40px] '>
                <h3 className='font-[700] text-[20px] leading-[27.28px] min-h-[27px] lg:h-[] lg:text-[32px] lg:leading-[43.65px]'>
                  <span className='text-[#FFA100] font-[1000] text-[30px]'>
                    _&nbsp;
                  </span>
                  Fast and reliable
                </h3>

                <p className='mt-[10px] text-[16px] leading-[21.28px] min-h-[44px] lg:text-[25px] lg:leading-[34.1px] lg:w-[412px] lg:h-[102px]'>
                  Roodi is built on the world’s fastest cloud infrastructures
                  with 99.99% uptime.
                </p>
              </div>

              <div className='mt-[40px] '>
                <h3 className='font-[700] text-[20px] leading-[27.28px] min-h-[27px] lg:h-[] lg:text-[32px] lg:leading-[43.65px]'>
                  <span className='text-[#FFA100] font-[1000] text-[30px]'>
                    _&nbsp;
                  </span>
                  Top-level security
                </h3>

                <p className='mt-[10px] text-[16px] leading-[21.28px] min-h-[44px] lg:text-[25px] lg:leading-[34.1px] lg:w-[412px] lg:h-[102px]'>
                  We protect your data with a 256-bit AES algorithm, both at
                  rest and on transit.
                </p>
              </div>

              <div className='mt-[40px] '>
                <h3 className='font-[700] text-[20px] leading-[27.28px] min-h-[27px] lg:h-[] lg:text-[32px] lg:leading-[43.65px]'>
                  <span className='text-[#FFA100] font-[1000] text-[30px]'>
                    _&nbsp;
                  </span>
                  No hidden costs
                </h3>

                <p className='mt-[10px] text-[16px] leading-[21.28px] min-h-[44px] lg:text-[25px] lg:leading-[34.1px] lg:w-[412px] lg:h-[102px]'>
                  One simple, transparent fee for every student, that’s all we
                  charge. No surprises.
                </p>
              </div>

              <div className='mt-[40px] lg:text-center'>
                <h3 className='font-[700] text-[20px] leading-[27.28px] min-h-[27px] lg:h-[] lg:text-[32px] lg:leading-[43.65px]'>
                  <span className='text-[#FFA100] font-[1000] text-[30px]'>
                    _&nbsp;
                  </span>
                  Dedicated support
                </h3>

                <p className='mt-[10px] text-[16px] leading-[21.28px] min-h-[44px] lg:text-[25px] lg:leading-[34.1px] lg:w-[412px] lg:h-[102px]'>
                  Get personalized support from our dedicated team, from setup
                  to growth and beyond.
                </p>
              </div>
            </div>

            <div className=' mt-[65px] lg:w-[353px] lg:h-[48px] lg:mx-auto lg:text-[20px] lg:leading-[27.78px]'>
              <button>JOIN THE WAITLIST</button>
            </div>
          </div>
        </section>

        <footer>
          <div className='lg:flex lg:mx-[100px] lg:flex-wrap lg:justify-around'>
            <div className='w-full h-[108px] flex items-center justify-center border-t-2 border-[#351D6B1A]'>
              <img
                className='w-[205px] h-[175px]'
                src={logo}
                alt='roodi logo'
              />
            </div>

            <div className=' mx-[20px] flex flex-col items-center'>
              <p className='mt-[5px] min-h-[34px] text-[14px] leading-[19.1px] max-w-[264px] text-center'>
                The best solution for schools of all sizes to ensure that no
                child is left behind.
              </p>

              <div className='flex justify-between item-center w-[100%] min-h-[30px] mt-[36px]'>
                <p className='text-[14px] font-[600] flex justify-around items-center'>
                  <svg
                    width='19'
                    height='30'
                    viewBox='0 0 19 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15.0838 1.875C15.5839 1.875 16.0634 2.07254 16.417 2.42417C16.7706 2.77581 16.9693 3.25272 16.9693 3.75V26.25C16.9693 26.7473 16.7706 27.2242 16.417 27.5758C16.0634 27.9275 15.5839 28.125 15.0838 28.125H3.77095C3.27089 28.125 2.79131 27.9275 2.43772 27.5758C2.08412 27.2242 1.88547 26.7473 1.88547 26.25V3.75C1.88547 3.25272 2.08412 2.77581 2.43772 2.42417C2.79131 2.07254 3.27089 1.875 3.77095 1.875H15.0838ZM3.77095 0C2.77083 0 1.81168 0.395088 1.10449 1.09835C0.397295 1.80161 0 2.75544 0 3.75V26.25C0 27.2446 0.397295 28.1984 1.10449 28.9016C1.81168 29.6049 2.77083 30 3.77095 30H15.0838C16.0839 30 17.0431 29.6049 17.7503 28.9016C18.4575 28.1984 18.8547 27.2446 18.8547 26.25V3.75C18.8547 2.75544 18.4575 1.80161 17.7503 1.09835C17.0431 0.395088 16.0839 0 15.0838 0L3.77095 0Z'
                      fill='#351D6B'
                      fill-opacity='0.74'
                    />
                    <path
                      d='M9.42734 26.25C9.9274 26.25 10.407 26.0525 10.7606 25.7008C11.1142 25.3492 11.3128 24.8723 11.3128 24.375C11.3128 23.8777 11.1142 23.4008 10.7606 23.0492C10.407 22.6975 9.9274 22.5 9.42734 22.5C8.92729 22.5 8.44771 22.6975 8.09411 23.0492C7.74052 23.4008 7.54187 23.8777 7.54187 24.375C7.54187 24.8723 7.74052 25.3492 8.09411 25.7008C8.44771 26.0525 8.92729 26.25 9.42734 26.25Z'
                      fill='#351D6B'
                      fill-opacity='0.74'
                    />
                  </svg>
                  &nbsp;{' '}
                  <span className='underline'>+234 (0) 903 164 1365</span>
                </p>

                <p className='text-[14px] font-[600] flex justify-around items-center'>
                  <svg
                    width='26'
                    height='20'
                    viewBox='0 0 26 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M25.3401 2.5C25.3401 1.125 24.1998 0 22.8061 0H2.53401C1.14031 0 0 1.125 0 2.5V17.5C0 18.875 1.14031 20 2.53401 20H22.8061C24.1998 20 25.3401 18.875 25.3401 17.5V2.5ZM22.8061 2.5L12.6701 8.75L2.53401 2.5H22.8061ZM22.8061 17.5H2.53401V5L12.6701 11.25L22.8061 5V17.5Z'
                      fill='#351D6B'
                      fill-opacity='0.74'
                    />
                  </svg>
                  &nbsp; <span className='underline'>support@roodi.co</span>
                </p>
              </div>
            </div>

            <p className='w-[full] flex items-center justify-center min-h-[25px] mt-[15px] text-[14px] font-[600]'>
              <svg
                width='18'
                height='25'
                viewBox='0 0 18 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.89159 5.625C9.7338 5.625 10.5415 5.95424 11.1371 6.54029C11.7326 7.12634 12.0672 7.9212 12.0672 8.75C12.0672 9.16038 11.985 9.56674 11.8254 9.94589C11.6658 10.325 11.4319 10.6695 11.1371 10.9597C10.8422 11.2499 10.4921 11.4801 10.1068 11.6371C9.72155 11.7942 9.30861 11.875 8.89159 11.875C8.04937 11.875 7.24166 11.5458 6.64612 10.9597C6.05059 10.3737 5.71602 9.5788 5.71602 8.75C5.71602 7.9212 6.05059 7.12634 6.64612 6.54029C7.24166 5.95424 8.04937 5.625 8.89159 5.625ZM8.89159 0C11.2498 0 13.5114 0.921872 15.1789 2.56282C16.8464 4.20376 17.7832 6.42936 17.7832 8.75C17.7832 15.3125 8.89159 25 8.89159 25C8.89159 25 0 15.3125 0 8.75C0 6.42936 0.936789 4.20376 2.60429 2.56282C4.27178 0.921872 6.53339 0 8.89159 0ZM8.89159 2.5C7.20716 2.5 5.59173 3.15848 4.40066 4.33058C3.20959 5.50269 2.54045 7.0924 2.54045 8.75C2.54045 10 2.54045 12.5 8.89159 20.8875C15.2427 12.5 15.2427 10 15.2427 8.75C15.2427 7.0924 14.5736 5.50269 13.3825 4.33058C12.1914 3.15848 10.576 2.5 8.89159 2.5Z'
                  fill='#351D6B'
                  fill-opacity='0.74'
                />
              </svg>
              &nbsp; 20 Olusegun Ajayi St., Lekki, (Lagos) Nigeria.
            </p>
          </div>

          <div className=' mx-[20px] flex flex-col items-center mb-[25px]'>
            <p className='text-[14px] leading-[19.1px] text-center mt-[12px]'>
              Privacy Policy
            </p>
            <p className='text-[14px] leading-[19.1px] text-center mt-[12px]'>
              Terms of Service
            </p>
            <p className='text-[14px] leading-[19.1px] text-center mt-[12px]'>
              All rights reserved by Roodi Technologies Limited
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;