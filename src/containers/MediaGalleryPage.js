import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchMediaAction } from '../actions/mediaActions';

class MediaGalleryPage extends Component {
	componentDidMount() {
		this.props.dispatch(searchMediaAction('rain'));
	}

	render() {
		console.log(this.props.images, 'Images');
		console.log(this.props.videos, 'Videos');
		console.log(this.props.selectedImage, 'Selected Image');
		console.log(this.props.selectedVideo, 'Selected Video');
		return (
			<div></div>
		);
	}
}

MediaGalleryPage.propTypes = {

};

const mapStateToProps = ({ images, videos }) => ({
	images: images[0],
	selectedImage: images.selectedImage,
	videos: videos[0],
	selectedVideo: videos.selectedVideo
});

export default connect(mapStateToProps)(MediaGalleryPage);