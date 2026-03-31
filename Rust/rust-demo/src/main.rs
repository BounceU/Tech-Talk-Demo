use std::env;
use std::io;

fn main() {
    println!("--- RUST ---\n");

    if let Some(invoked_as) = env::args().next() {
        println!("Invoked Command: {}", invoked_as);
    }

    if let Ok(exe_path) = env::current_exe() {
        println!("Resolved Binary Path: {}\n", exe_path.display());
    }

    println!("--- System PATH Variables ---");
    if let Some(paths) = env::var_os("PATH") {
        for (i, path) in env::split_paths(&paths).enumerate() {
            println!("{:02}: {}", i + 1, path.display());
        }
    } else {
        println!("No PATH variable found.");
    }

    println!("\nPress Enter to exit...");
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();
}
