import sqlite3
import json

def run():
    conn = sqlite3.connect('payload.db')
    cursor = conn.cursor()
    
    # List tables
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables = [row[0] for row in cursor.fetchall()]
    print("Tables:", tables)
    
    # Query globals table
    # Typically payload stores globals in a table named after the global slug or in a generic globals table
    globals_tables = [t for t in tables if 'global' in t or 'settings' in t]
    print("Likely globals tables:", globals_tables)
    
    for table in tables:
        if 'settings' in table or 'site' in table or 'navigation' in table:
            try:
                cursor.execute(f"SELECT * FROM {table} LIMIT 5;")
                col_names = [desc[0] for desc in cursor.description]
                rows = cursor.fetchall()
                print(f"\nTable {table} columns: {col_names}")
                for r in rows:
                    print(r)
            except Exception as e:
                print(f"Error reading {table}: {e}")

if __name__ == '__main__':
    run()
