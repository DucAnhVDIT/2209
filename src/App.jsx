import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'react-lottie';

import fatCatAnimation from '../public/FatCat.json';
import phaoHoaAnimation from '../public/PhaoHoa.json';
import virgoAnimation from '../public/Virgo.json';
import EmailForm from './EmailForm';

const PasswordBox = ({ onCorrectPassword }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '2209') {
      onCorrectPassword();
    } else {
      setError('Incorrect password. Try again!');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
      fontFamily: "'Bricolage Grotesque', sans-serif",
    }}>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <h2 style={{ color: '#FFB300', marginBottom: '20px', fontSize: '28px', fontWeight: 700 }}>Nhập mật khẩu</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: '12px',
            fontSize: '18px',
            borderRadius: '25px',
            border: '2px solid #FFB300',
            marginBottom: '20px',
            width: '200px',
            textAlign: 'center',
            outline: 'none',
            fontFamily: "'Bricolage Grotesque', sans-serif",
          }}
        />
        <br />
        <button
          type="submit"
          style={{
            padding: '12px 30px',
            fontSize: '18px',
            backgroundColor: '#FFB300',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 700,
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#FFA000'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#FFB300'}
        >
          Mở khoá
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '15px', fontSize: '16px' }}>{error}</p>}
    </div>
  );
};

const LoadingAnimation = ({ onComplete }) => {
  const virgoOptions = {
    loop: false,
    autoplay: true, 
    animationData: virgoAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    const timer = setTimeout(onComplete, 3000); 
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
      fontFamily: "'Bricolage Grotesque', sans-serif",
    }}>
      <Lottie options={virgoOptions} height={200} width={200} />
    </div>
  );
};

const BirthdayCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const fatCatOptions = {
    loop: true,
    autoplay: true, 
    animationData: fatCatAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const phaoHoaOptions = {
    loop: true,
    autoplay: true, 
    animationData: phaoHoaAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <div style={{
        perspective: '1000px',
        width: '300px',
        height: '400px',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 2,
      }}>
        <motion.div
          className="card"
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transition: 'transform 1s',
          }}
          animate={{ rotateY: isOpen ? -180 : 0 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            background: 'white',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            boxSizing: 'border-box',
            color: '#FFB300',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1), 0 6px 10px rgba(0,0,0,0.08)',
          }}>
            <Lottie options={fatCatOptions}
                    height={300}
                    width={200}
            />
            {/* <div style={{ 
              fontSize: '28px', 
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: '1.4',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              Happy<br/>Birthday
            </div> */}
            <div style={{
              fontSize: '20px',
              color: '#FFA000',
              fontWeight: '300',
              marginTop: '5px',
              alignItems:'center  '
            }}>
              Sờ mèo đi cậu
            </div>
          </div>
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '10px',
            padding: '20px',
            boxSizing: 'border-box',
            transform: 'rotateY(180deg)',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1), 0 6px 10px rgba(0,0,0,0.08)',
            fontFamily: "'Bricolage Grotesque', sans-serif",
          }}>
            <div style={{position: 'relative', zIndex: 1}}>
              <h2 style={{ color: '#FFB300', marginBottom: '15px', fontSize: '24px' }}>Gửi cậu,</h2>
              <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#795548' }}>
               Chúc mừng sinh nhật nhớ !!! <br></br> Chúc cậu tuổi mới thật nhiều điều tốt đẹp, tớ mong cậu bình an và hạnh phúc. <br></br>Chúc cậu mỗi ngày đều tìm thấy niềm vui, tìm được sự cân bằng giữa công việc và cuộc sống. <br></br> Dù chuyện gì xảy ra, tớ vẫn luôn ở đây, ủng hộ cậu. <br></br> Sinh nhật vui vẻ nhé!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 1,
            }}
          >
            <Lottie 
              options={phaoHoaOptions}
              height="100%"
              width="100%"
              style={{position: 'absolute', top: 0, left: 0}}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const App = () => {
  const [stage, setStage] = useState('password');

  return (
    <>
      <style>{`
        body, html {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>
      <AnimatePresence mode="wait">
        {stage === 'password' && (
          <motion.div
            key="password"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PasswordBox onCorrectPassword={() => setStage('loading')} />
          </motion.div>
        )}
        {stage === 'loading' && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LoadingAnimation onComplete={() => setStage('card')} />
          </motion.div>
        )}
        {stage === 'card' && (
          <motion.div
            key="birthday-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ 
              height: '100vh', 
              width: '100vw',
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              fontFamily: 'Arial, sans-serif',
              background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
              position: 'relative',
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            <BirthdayCard />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;