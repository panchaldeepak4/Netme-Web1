import React from 'react'
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const Upload1 = () => {
  return (
    <>
    <Dragger {...props}>
    {/* <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p> */}
    <p className="ant-upload-drag-icon">
      <img src='Images/Vector.png'></img>
    </p>

    <p className="ant-upload-text">Please upload your first image.</p>
    {/* <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p> */}
  </Dragger>
    </>
  )
}

export default Upload1