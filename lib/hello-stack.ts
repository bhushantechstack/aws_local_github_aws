import * as cdk from 'aws-cdk-lib';
import { aws_s3 } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class HelloStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  
    const s3Bucket = new aws_s3.Bucket(this, 'Bucket_for_storage', {
    });
  }
}
