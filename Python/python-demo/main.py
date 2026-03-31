import sys
import os

def main():
    print("--- PYTHON ---\n")
    
    print(f"Invoked Command: {sys.argv[0]}")
    print(f"Python Interpreter: {sys.executable}\n")

    print("--- System PATH Variables ---")
    path_var = os.environ.get('PATH', '')
    
    if path_var:
        paths = path_var.split(os.pathsep)
        for i, p in enumerate(paths, 1):
            print(f"{i:02}: {p}")
    else:
        print("No PATH variable found.")
    
    input("\nPress Enter to exit...")

if __name__ == "__main__":
    main()