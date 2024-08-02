<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Artisan;
class GenerateCrud extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:crud {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create Controller, Request, Resource, Model, and Migration in one command';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        //
        $name = $this->argument('name');
        $tableName = Str::plural(Str::snake($name));
        // Create Model
        Artisan::call("make:model {$name}");

        // Create Controller
        Artisan::call("make:controller {$name}Controller");

        // Create Store Request
        Artisan::call("make:request Store{$name}Request");

        // Create Update Request
        Artisan::call("make:request Update{$name}Request");

        // Create Resource
        Artisan::call("make:resource {$name}Resource");

        // Create Migration
        Artisan::call("make:migration create_{$tableName}_table");

        $this->info("CRUD for {$name} created successfully!");
    }
}
