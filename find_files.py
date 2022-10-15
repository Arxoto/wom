import os

suffixs = [".exe", ".lnk", ".bat", ".url", ".html"]
filter_keys = ["卸载"]


def is_target(file_name: str):
    for suf in suffixs:
        if file_name.endswith(suf):
            return True
    return False


def should_pass(file_name: str):
    for k in filter_keys:
        if k in file_name:
            return True
    return False


def output(file_name, file_path):
    if is_target(file_name) and not should_pass(file_name):
        print(f"{file_name}|{file_path}")


def list_file(path, func):
    if not os.path.exists(path):
        return
    files = os.listdir(path)
    for file_name in files:
        file_path = os.path.join(path, file_name)
        if os.path.isdir(file_path):
            list_file(file_path, func)
            continue
        elif os.path.isfile(file_path):
            func(file_name, os.path.abspath(file_path))


if __name__ == '__main__':
    list_file(r".", output)
