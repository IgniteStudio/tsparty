import React from 'react'

interface IProps {
    people: {
      name: string;
      age: number;
      url: string;
      note?: string;
    }[];
  }

export default function List(props: IProps) {
    return (
        <div>
            I am a List
        </div>
    )
}
