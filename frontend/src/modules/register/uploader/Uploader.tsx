import React, { useState } from 'react'
import { message, Upload, UploadFile, UploadProps } from 'antd'
import { RcFile, UploadChangeParam } from 'antd/es/upload'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'


const getBase64 = (img: RcFile, callback: (url: string) => void) => {
	const reader = new FileReader()
	reader.addEventListener('load', () => callback(reader.result as string))
	reader.readAsDataURL(img)
}

const beforeUpload = (file: RcFile) => {
	const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
	if (!isJpgOrPng) {
		message.error('Выберите JPG/PNG файл')
	}
	const isLt2M = file.size / 1024 / 1024 < 2
	if (!isLt2M) {
		message.error('Картинка должна быть меньше, чем 2MB')
	}
	return isJpgOrPng && isLt2M
}

const Uploader = () => {
	const [loading, setLoading] = useState(false)
	const [imageUrl, setImageUrl] = useState<string>()

	const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
		if (info.file.status === 'uploading') {
			setLoading(true)
			return
		}
		if (info.file.status === 'done') {
			// Get this url from response in real world.
			getBase64(info.file.originFileObj as RcFile, (url) => {
				setLoading(false)
				setImageUrl(url)
			})
		}
	}

	const uploadButton = (
		<div>
			{loading ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>Загрузить фото</div>
		</div>
	)

	return (
		<Upload
			name='avatar'
			listType='picture-card'
			className='avatar-uploader'
			showUploadList={false}
			action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
			beforeUpload={beforeUpload}
			onChange={handleChange}
		>
			{imageUrl ? <img src={imageUrl} alt='avatar' style={{ width: '100%' }} /> : uploadButton}
		</Upload>
	)
}

export default Uploader
