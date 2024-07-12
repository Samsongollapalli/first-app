import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBar1(prop) {
    const {scale} = prop
  return <ProgressBar now={scale} />;
}

export default ProgressBar1;