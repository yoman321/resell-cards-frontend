import * as zustand from 'zustand'
import { act } from '@testing-library/react'
import { vi } from 'vitest';

const { create: actualCreate, createStore: actualCreateStore } =
  await vi.importActual<typeof zustand>('zustand');

export const storeResetFns = new Set<() => void>();

const createUncurried = <T>(stateCreator: zustand.StateCreator<T>) => {
  const store = actualCreate(stateCreator)
  const initialState = store.getInitialState()
  storeResetFns.add(() => {
    store.setState(initialState, true)
  })
  return store
}

