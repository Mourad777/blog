<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {

            // $table->integer('post_id')->unsigned();
            // $table->foreign('post_id')->references('id')->on('posts')->onDelete('cascade');
            // $table->integer('comment_id')->unsigned()->nullable();
            // $table->string('user');
            // $table->tinyInteger('is_approved');
            // $table->tinyInteger('is_reply');
            // $table->timestamps();

            $table->id();
            $table->text('content');
            $table->string('user');
            $table->string('email');
            $table->tinyInteger('is_approved');
            // $table->integer('user_id')->unsigned();
            $table->integer('parent_id')->unsigned()->nullable();
            $table->integer('commentable_id')->unsigned();
            $table->string('commentable_type');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}
