<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        User::create([
            'username' => 'admin',
            'name' => 'Admin',
            'contact_number' => '9876543210',
            'address' => NULL,
            'email' => 'admin@admin.com',
            'password' => bcrypt('12345678'),
            'email_verified_at' => NULL,
            'user_type' => 'admin',
            'player_id' => NULL,
            'remember_token' => NULL,
            'last_notification_seen' => NULL,
            'status' => 1,
            'current_team_id' => NULL,
            'profile_photo_path' => NULL,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => NULL,
            'deleted_at' => NULL,
        ]);


        User::create([
            'username' => 'user',
            'name' => 'User',
            'contact_number' => '9876543210',
            'address' => NULL,
            'email' => 'user@test.com',
            'password' => bcrypt('password'),
            'email_verified_at' => NULL,
            'user_type' => 'user',
            'player_id' => NULL,
            'remember_token' => NULL,
            'last_notification_seen' => NULL,
            'status' => 1,
            'current_team_id' => NULL,
            'profile_photo_path' => NULL,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => NULL,
            'deleted_at' => NULL,
        ]);
    }
}
