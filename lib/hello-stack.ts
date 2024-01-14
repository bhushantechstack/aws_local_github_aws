import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { aws_s3 } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class HelloStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'HelloQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    const s3Bucket = new aws_s3.Bucket(this, 'MyS3Bucket', {
      bucketName:"my-first-bucket"
    });
  }
}