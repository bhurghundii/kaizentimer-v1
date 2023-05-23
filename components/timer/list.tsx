"use client"; 

import React, { useEffect } from "react";
import { AppContext } from "@/components/timer/timercontext"
import { Types } from "@/components/timer/reducers";
import TimerCard from "./timercard";
import CreateTimerModal from "../modals/createtimer";
import EditTimerModal from "../modals/edittimer";

const List = () => {
  const [form, setForm] = React.useState({
    name: "",
    price: 0
  });

  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem('storedTimers')
    console.log(item)
    if (item != null) { 
      JSON.parse(item).map(timer => {
        createProductNew(timer.name, parseInt(timer.price))
      })
    }
    // loadProducts(JSON.parse(item));
  }, [])

  const { state ,dispatch } = React.useContext(AppContext);

  const handleForm = (type: string, value: string) => {
    setForm(form => ({
      ...form,
      [type]: value
    }));
  };


  const loadProducts = (products : any) => {
    dispatch({
      type: Types.Load,
      payload: {
        products : products
      }
    });
  };

  const createProduct = () => {
    dispatch({
      type: Types.Create,
      payload: {
        id: Math.round(Math.random() * 10000),
        name: form.name,
        price: form.price
      }
    });
  };

  const createProductNew = (name : string, price : number) => {
    dispatch({
      type: Types.Create,
      payload: {
        id: Math.round(Math.random() * 10000),
        name: name,
        price: price
      }
    });
  };

  const editProduct = (id: number) => {
    dispatch({
      type: Types.Edit,
      payload: {
        id: id,
        name: form.name,
        price: form.price
      }
    });
  };

  const editProductNew = (id: number, name : string, price : number) => {
    dispatch({
      type: Types.Edit,
      payload: {
        id: id,
        name: name,
        price: price
      }
    });
  };

  const deleteProduct = (id: number) => {
    dispatch({
      type: Types.Delete,
      payload: {
        id,
      }
    })
  }

  return (
    <div>
      <input
        value={form.name}
        onChange={e => {
          handleForm("name", e.target.value);
        }}
        placeholder="Name"
      />
      <input
        value={form.price}
        type="number"
        onChange={e => {
          handleForm("price", e.target.value);
        }}
        placeholder="Price"
      />
      <button onClick={createProduct}>create</button>
      <div style={{ marginTop: 20 }}>
        {state.products.map(c => (
          <div>
            {/* TODO: Add timer object here*/}

            <div key={c.price}> 
            <TimerCard name={c.name} duration={c.price} /> 
            </div>
            <span>{c.name}</span>
            {/* <span>{c.price}</span> */}
            <button onClick={() => deleteProduct(c.id)}>delete</button>
            {/* <button onClick={() => editProduct(c.id)}>Edit</button> */}
            <EditTimerModal id={c.id} editProduct={editProductNew} />

          </div>
        ))}
      </div>

      <div className="relative flex place-items-center ">
        <CreateTimerModal createProduct={createProductNew} />
      </div>
    </div>
  );
};

export default List;
