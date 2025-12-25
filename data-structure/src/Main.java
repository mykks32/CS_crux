public class Main {
    public static void main(String[] args) {
        int[] arr = {1, -2, 3, 4, -1, 2};
        System.out.println("Maximum subarray sum: " + maxSubArraySum(arr));
    }

    public static int maxSubArraySum(int[] arr) {
        int maxSoFar = arr[0];
        int maxEndingHere = arr[0];

        for (int i = 1; i < arr.length; i++) {
            maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }

        return maxSoFar;
    }
}
