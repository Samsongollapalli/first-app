
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressDetails(prop) {
    const {scale } = prop
  return <ProgressBar now={scale} />;
}

export default ProgressDetails;