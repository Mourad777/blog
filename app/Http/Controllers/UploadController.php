<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Aws\S3\PostObjectV4;
use Aws\S3\S3Client;
use Illuminate\Support\Facades\Log;

class UploadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function upload(Request $request)
    {
        //
        $filename =  $request->filename;
        $directory =  $request->directory;
        $s3 = config('filesystems.disks.s3');
        $client = new S3Client(['version' => 'latest', 'region' => $s3['region'], 'credentials' => [
            'key' => $s3['key'], 'secret' => $s3['secret'],
        ]]);
        $bucket = $s3['bucket'];
        Log::info('bucket name' . $bucket);
        $prefix = $directory . '/';
        $acl = 'public-read';
        $expires = '+10 minutes';
        $formInputs = [
            'acl' => $acl,
            'key' => $prefix . $filename,
        ];
        $options = [
            ['acl' => $acl],
            ['bucket' => $bucket],
            ['starts-with', '$key', $prefix],
        ];
        $postObject = new PostObjectV4($client, $bucket, $formInputs, $options, $expires);
        $attributes = $postObject->getFormAttributes();
        $inputs = $postObject->getFormInputs();
        return response([
            'attributes' => $attributes,
            'inputs' => $inputs,
            'url' => $attributes['action'] . '/' . $directory . '/' . $filename
        ]);
        //////////////////////////////////////////////////////////////////////////////
        // $adapter = \Storage::getAdapter(); // Get the filesystem adapter
        // $client = $adapter->getClient(); // Get the aws client
        // $bucket = $adapter->getBucket(); // Get the current bucket
        // $key = $request->directory . '/' . $filename;
        // // Make a PutObject command
        // Log::info('bucket ---' . $adapter->getBucket());
        // Log::info('key ---' . $key);

        // $cmd = $client->getCommand('PutObject', [
        //     'Bucket' => $bucket,
        //     'Key' => $key,
        //     'ACL' => 'public-read' // Explained later
        // ]);
        // // Get the presigned request
        // $request = $client->createPresignedRequest($cmd, '+20 minutes');
        // // Get the actual URL to make the request to
        // $presignedUrl = (string)$request->getUri();
        // return $presignedUrl;
        //////////////////////////////////////////////////////////////////////////
        // $s3 = \Storage::disk('s3');
        // $client = $s3->getDriver()->getAdapter()->getClient();
        // $expiry = "+10 minutes";
        //    Log::info('key name'.$request->directory.'/' . $filename);
        // $command = $client->getCommand('PutObject', [
        //     'Bucket' => \Config::get('filesystems.disks.s3.bucket'),
        //     'Key'    => $request->directory.'/' . $filename
        // ]);

        // $request = $client->createPresignedRequest($command, $expiry);

        // return (string) $request->getUri();
        ///////////////////////////////////////////////////////////////////////////



        // $s3 = \Storage::disk('s3');
        // $client = $s3->getDriver()->getAdapter()->getClient();
        // $expiry = "+10 minutes";

        // $command = $client->getCommand('GetObject', [
        //     'Bucket' => \Config::get('filesystems.disks.s3.bucket'),
        //     'Key'    => $request->directory.'/' . $filename,
        // ]);

        // $request = $client->createPresignedRequest($command, $expiry);

        // return (string) $request->getUri();

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // $s3 = config('filesystems.disks.s3');
        // Log::info('key...... '.env('AWS_KEY'));

        // $client = new S3Client([
        //     'version' => 'latest',
        //     'region' => $s3['region'],
        //     'credentials' => ['key'    => $s3['key'], 'secret' => $s3['secret'],],
        // ]);

        // $bucket = $s3['bucket'];

        // $formInputs = ['acl' => 'public-read'];

        // $options = [['acl' => 'public-read'], ['bucket' => $bucket], ['starts-with', 'Content-Type', 'multipart/form-data'],];

        // $expires = '+1 hours';

        // $postObject = new PostObjectV4($client, $bucket, $formInputs, $options, $expires);

        // $formAttributes = $postObject->getFormAttributes();

        // $formInputs = $postObject->getFormInputs();

        // return response()->json(['code' => 200, 'formAttributes' => $formAttributes, 'formInputs' => $formInputs]);
    }
}
