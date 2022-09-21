const express = require(`express`);
const cors = require(`cors`);
const app = express();
const port = 3030;

app.use(express.json());
app.use(cors());

app.listen(
    port,
    console.log(`Server running on: http://localhost:${port}`)
)

const bnbs = [
    {
        id: 1,
        pictures: ["https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/be42241a-5346-4745-a2ef-8cf7576f88b8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/22f86e64-0d34-4237-b47c-d41aff588de0.jpg?im_w=720", "https://a0.muscache.com/im/pictures/22f86e64-0d34-4237-b47c-d41aff588de0.jpg?im_w=720"],
        bnbName: "El Port de la Selva, Spain",
        distance: 201,
        date: "Sep 21 - 28",
        price: 541,
        rating: 4.75
    },
    {
        id: 2,
        pictures: ["https://a0.muscache.com/im/pictures/be42241a-5346-4745-a2ef-8cf7576f88b8.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/22f86e64-0d34-4237-b47c-d41aff588de0.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720"],
        bnbName: "Harlingen, Netherlands",
        distance: 3460,
        date: "Nov 6 - 11",
        price: 370,
        rating: 4.98
    },
    {
        id: 3,
        pictures: ["https://a0.muscache.com/im/pictures/22f86e64-0d34-4237-b47c-d41aff588de0.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/91290830-0db6-40c0-a23b-86a904ee5239.jpeg?im_w=720"],
        bnbName: "Amsterdam, Netherlands",
        distance: 458,
        date: "Sep 7 - 13",
        price: 540,
        rating: 4.76
    },
    {
        id: 4,
        pictures: ["https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/91290830-0db6-40c0-a23b-86a904ee5239.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720"],
        bnbName: "Joncherey, France",
        distance: 2310,
        date: "Oct 16 - 21",
        price: 239,
        rating: "New"
    },
    {
        id: 5,
        pictures: ["https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/91290830-0db6-40c0-a23b-86a904ee5239.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50768459/original/440eca9f-f5c8-4e0a-815b-5d6141f707d0.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50768459/original/440eca9f-f5c8-4e0a-815b-5d6141f707d0.jpeg?im_w=720"],
        bnbName: "Guyonvelle, France",
        distance: 240,
        date: "Nov 21 - 26",
        price: 109,
        rating: 4.69
    },
    {
        id: 6,
        pictures: ["https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50768459/original/440eca9f-f5c8-4e0a-815b-5d6141f707d0.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50768459/original/440eca9f-f5c8-4e0a-815b-5d6141f707d0.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50768459/original/440eca9f-f5c8-4e0a-815b-5d6141f707d0.jpeg?im_w=720"],
        bnbName: "Caylus, France",
        distance: 270,
        date: "Oct 2 - 7",
        price: 116,
        rating: 4.97
    },
    {
        id: 7,
        pictures: ["https://a0.muscache.com/im/pictures/prohost-api/Hosting-50768459/original/440eca9f-f5c8-4e0a-815b-5d6141f707d0.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-48974193/original/dfc94d55-d670-42db-bdb8-ffda4fb2996b.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50768459/original/440eca9f-f5c8-4e0a-815b-5d6141f707d0.jpeg?im_w=720"],
        bnbName: "IJmuiden, Netherlands",
        distance: 1155,
        date: "Oct 2 - 7",
        price: 116,
        rating: 4.97
    },
    {
        id: 8,
        pictures: ["https://a0.muscache.com/im/pictures/miso/Hosting-48974193/original/dfc94d55-d670-42db-bdb8-ffda4fb2996b.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50768459/original/440eca9f-f5c8-4e0a-815b-5d6141f707d0.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720"],
        bnbName: "Worstead, UK",
        distance: 2456,
        date: "Oct 30 - Nov 5",
        price: 180,
        rating: 4.84
    },
    {
        id: 9,
        pictures: ["https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50768459/original/440eca9f-f5c8-4e0a-815b-5d6141f707d0.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-48974193/original/dfc94d55-d670-42db-bdb8-ffda4fb2996b.jpeg?im_w=720"],
        bnbName: "Volimes, Greece",
        distance: 3478,
        date: "Oct 5 - 10",
        price: 205,
        rating: 4.9
    },
    {
        id: 10,
        pictures: ["https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-48974193/original/dfc94d55-d670-42db-bdb8-ffda4fb2996b.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50768459/original/440eca9f-f5c8-4e0a-815b-5d6141f707d0.jpeg?im_w=720"],
        bnbName: "Krabčice, Czechia",
        distance: 3400,
        date: "Sep 1 - 8",
        price: 69,
        rating: 4.96
    },
    {
        id: 11,
        pictures: ["https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50768459/original/440eca9f-f5c8-4e0a-815b-5d6141f707d0.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-48974193/original/dfc94d55-d670-42db-bdb8-ffda4fb2996b.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720"],
        bnbName: "Raray, France",
        distance: 2720,
        date: "Nov 6 - 11",
        price: 288,
        rating: "New"
    },
    {
        id: 12,
        pictures: ["https://a0.muscache.com/im/pictures/9b58c534-6223-4ecd-81e2-6b6d5b7204c4.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50768459/original/440eca9f-f5c8-4e0a-815b-5d6141f707d0.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720"],
        bnbName: "Woodbridge, UK",
        distance: 4561,
        date: "Sep 4 - 9",
        price: 122,
        rating: 4.71
    },
    {
        id: 13,
        pictures: ["https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50768459/original/440eca9f-f5c8-4e0a-815b-5d6141f707d0.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/9b58c534-6223-4ecd-81e2-6b6d5b7204c4.jpg?im_w=720"],
        bnbName: "Joncherey, France",
        distance: 2310,
        date: "Oct 23 - 28",
        price: 335,
        rating: 4.92
    },
    {
        id: 14,
        pictures: ["https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-32559296-unapproved/original/c4b1f2e0-6476-4aa3-bed5-ab222a31a69c.JPEG?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-642465122737579307/original/e83d2716-aa22-4f2e-ba3f-9d5d74ed0ae6.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/9b58c534-6223-4ecd-81e2-6b6d5b7204c4.jpg?im_w=720"],
        bnbName: "Amsterdam, Netherlands",
        distance: 458,
        date: "Sep 22 - 27",
        price: 202,
        rating: 4.56
    },
    {
        id: 15,
        pictures: ["https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/9b58c534-6223-4ecd-81e2-6b6d5b7204c4.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-642465122737579307/original/e83d2716-aa22-4f2e-ba3f-9d5d74ed0ae6.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720"],
        bnbName: "Noyers-sur-Cher, France",
        distance: 2457,
        date: "Oct 2 - 7",
        price: 109,
        rating: 4.79
    },
    {
        id: 16,
        pictures: ["https://a0.muscache.com/im/pictures/miso/Hosting-642465122737579307/original/e83d2716-aa22-4f2e-ba3f-9d5d74ed0ae6.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-642465122737579307/original/e83d2716-aa22-4f2e-ba3f-9d5d74ed0ae6.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/9b58c534-6223-4ecd-81e2-6b6d5b7204c4.jpg?im_w=720"],
        bnbName: "Zennewijnen, Netherlands",
        distance: 204,
        date: "Sep 4 - 9",
        price: 97,
        rating: 4.67
    }
];

app.get(`/bnbs`, (req, res) => {
    res.status(200).send(bnbs);
})