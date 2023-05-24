import { reducer } from '@/components/timer/reducer'
import { InitialStateType } from '@/types/InitialStateType'
import { Types } from '@/enums/Types'

describe('Reducer tests', () => {
  it('New timers are created and returned as an array', () => {

    const initialState = {
      timers: [],
    };

    const timers :  InitialStateType = initialState ;

    const result = reducer(timers.timers, {
      type: Types.Create,
      payload: {
          id: 111,
          name: 'hello',
          time: 30,
      }
  }) 
  
    expect(result).toHaveLength(1);
    
  })

  it('Edited timers are returned as a part of the array', () => {

    const initialState = {
      timers: [{"id": 111, "name": "hello", "time": 30}],
    };

    const timers :  InitialStateType = initialState ;

    const result = reducer(timers.timers, {
      type: Types.Edit,
      payload: {
          id: 111,
          name: 'test',
          time: 56,
      }
  }) 
  
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("test");
    expect(result[0].time).toBe(56);

  })

  it('Edited timers are returned as a part of the array', () => {

    const initialState = {
      timers: [{"id": 111, "name": "hello", "time": 30}],
    };

    const timers :  InitialStateType = initialState ;

    const result = reducer(timers.timers, {
      type: Types.Edit,
      payload: {
          id: 111,
          name: 'test',
          time: 56,
      }
  }) 
  
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("test");
    expect(result[0].time).toBe(56);

  })

  it('Deleted timers wipe things out', () => {

    const initialState = {
      timers: [{"id": 111, "name": "hello", "time": 30}],
    };

    const timers :  InitialStateType = initialState ;

    const result = reducer(timers.timers, {
      type: Types.Delete,
      payload: {
          id: 111
      }
  }) 
  
    expect(result).toHaveLength(0);
    expect(result).toEqual([]);

  })
})