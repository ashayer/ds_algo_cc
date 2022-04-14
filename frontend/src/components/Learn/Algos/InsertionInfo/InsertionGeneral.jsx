/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Grid, Typography } from "@mui/material/";

const InsertionGeneral = () => {
  return (
    <Grid container>
      <Grid item md={10} sx={{ border: "1px solid black" }}>
        <Typography variant="h6">
          Insertion sort is an IN-PLACE sorting algorithm that builds the sorted array one element
          at a time. Similar to how one would sort a deck of cards by hand. It sorts by iterating
          through the array and creating the sorted list behind it. This separates the original
          array into a sorted and unsorted sections, the head of this sorted section will always be
          the largest value compared so far. Similar to other QUADRATIC SORTING algorithms it is
          very efficient for smaller data sets. In fact VARIATIONS OF THE QUICK SORT ALGORITHM, use
          insertion sort for smaller arrays, commonly around the size of 10 instead of its typical
          recursive behavior. It is also very efficient on nearly sorted lists as well.
        </Typography>
      </Grid>
      <Grid item md={2} sx={{ border: "1px solid black" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif"
          alt="insertionGif"
          title="Insertion sort animation from Wikipedia"
        />
      </Grid>
      <Grid item md={8} sx={{ border: "1px solid black" }}>
        <Typography variant="h6">
          The time and space complexities of insertion sort can be seen in the table. As you can see
          it has the best case of n; which is only possible if the array is already sorted. This is
          also the reason why it is more efficient on already sorted arrays. It only has to do a
          comparison on one element at a time. Compared to an algorithm like selection sort where
          each element is compared with every other element. This also gives insertion sort the
          property of being a STABLE algorithm. If it compares and finds the values are the same it
          simply moves to the next element in the list.
        </Typography>
      </Grid>
      <Grid item sx={{ border: "1px solid black" }}>
        <table>
          <thead>
            <tr>
              <td>Best</td>
              <td>Average</td>
              <td>Worst</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>n</td>
              <td>n&#178;</td>
              <td>n&#178;</td>
            </tr>
          </tbody>
        </table>
      </Grid>
    </Grid>
  );
};

export default InsertionGeneral;
