import AWS from 'aws-sdk';

const s3 = new AWS.S3({ region: 'your-region' });

// Generate Pre-Signed URL for Upload
export async function generateUploadURL(bucketName, fileName) {
  const params = {
    Bucket: bucketName,
    Key: fileName,
    Expires: 60,
  };
  const uploadURL = await s3.getSignedUrlPromise('putObject', params);
  return uploadURL;
}