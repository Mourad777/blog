<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePhotosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('photos', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('photographer')->nullable();
            // $table->tinyInteger('is_published');
            $table->string('url');
            $table->text('description')->nullable();

            $table->string('camera')->nullable();
            $table->string('lens')->nullable();
            $table->string('aperture')->nullable();
            $table->string('shutter')->nullable();
            $table->string('iso')->nullable();

            $table->string('country')->nullable();
            $table->text('tags')->nullable();
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
        Schema::dropIfExists('photos');
    }
}
