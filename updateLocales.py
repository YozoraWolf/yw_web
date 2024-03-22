import os
import json

# ANSI color codes
# Just being fancy :p
class Color:
    RED = '\033[91m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    MAGENTA = '\033[95m'
    CYAN = '\033[96m'
    RESET = '\033[0m'  # default

def copy_missing_keys(source, target):
    updated = False

    # Create a copy of target keys
    target_keys = list(target.keys())

    # Remove keys not present in source from target
    for key in target_keys:
        if key not in source:
            #print(f"Key '{key}' not found in source, removing...") # Debug
            del target[key]
            updated = True

    # Add missing keys from source to target
    for key, value in source.items():
        if key not in target:
            #print(f"Key '{key}' not found in target, adding...") # Debug
            target[key] = "" if isinstance(value, str) else {}
            updated = True

    # Recursively copy missing keys
    for key, value in source.items():
        if isinstance(value, dict) and isinstance(target.get(key), dict):
            if copy_missing_keys(value, target[key]):
                updated = True

    return updated


# Path to the en.json file
en_file = "src/locales/en.json"

# Path to the directory containing the *.json files
locales_dir = "src/locales/"

print(f"{Color.CYAN}Updating locales from {Color.RESET}'en.json'{Color.CYAN} ...")

# Load the en.json file
with open(en_file, "r") as f:
    en_data = json.load(f)

# Iterate over all *.json files in the locales directory
for filename in os.listdir(locales_dir):

    # except en.json since that's where the update will always come from
    if filename == "en.json":
        continue
    
    print(f"{Color.YELLOW}Updating {Color.RESET}{filename}{Color.YELLOW} ...")

    # Rest of the code goes here
    if filename.endswith(".json"):
        file_path = os.path.join(locales_dir, filename)

        # Load the current *.json file
        with open(file_path, "r") as f:
            data = json.load(f)

        # Copy missing keys from en.json and set them as empty 
        updated = copy_missing_keys(en_data, data)
        print(f"{Color.GREEN}Updated {filename}" if updated else f"{Color.BLUE}No updates for {filename}")

        # Save the updated data back to the file
        with open(file_path, "w") as f:
            json.dump(data, f, indent=4, ensure_ascii=False)
print(f"{Color.GREEN}Done updating locales!")