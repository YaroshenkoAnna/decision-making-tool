import type { OptionData } from "../types/index";

const STORAGE_KEYS = {
  options: "ya-options",
  soundDisabled: "ya-soundDisabled",
  optionsCleared: "ya-optionsCleared",
} as const;

type StorageKeys = keyof typeof STORAGE_KEYS;

type StorageMap = {
  options: OptionData[] | null;
  soundDisabled: boolean;
  optionsCleared: boolean;
};

export class Storage {
  public static save<K extends StorageKeys>(key: K, data: StorageMap[K]): void {
    localStorage.setItem(STORAGE_KEYS[key], JSON.stringify(data));
  }

  public static load<K extends StorageKeys>(key: K): StorageMap[K] | null {
    const data = localStorage.getItem(STORAGE_KEYS[key]);
    return data ? (JSON.parse(data) as StorageMap[K]) : null;
  }

  public static remove<K extends StorageKeys>(key: K): void {
    localStorage.removeItem(STORAGE_KEYS[key]);
  }
}
