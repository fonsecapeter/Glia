const React = require('react');
const cloudinaryConfig = require('react-cloudinary').cloudinaryConfig;
const CloudinaryImage = require('react-cloudinary').CloudinaryImage;
cloudinaryConfig({ cloud_name: 'dxhqr7u1z' });
const imagePublicId = 'lifesaver_nzepii';


const Help = React.createClass({
  render () {
    return (
      <div className="help-box-content">
        <h4>Help</h4>
        <CloudinaryImage className="help-icon" publicId={imagePublicId} options={{ width: 32, height: 32 }} />
      </div>
    );
  }
});

module.exports = Help;
